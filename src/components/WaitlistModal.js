"use client";

import { useEffect, useState, useCallback } from "react";
import { ref, push, get } from "firebase/database";
import { database } from "../firebase/config";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Nome da empresa é obrigatório";
    }
    
    if (!formData.name.trim()) {
      newErrors.name = "Seu nome é obrigatório";
    }
    
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp inválido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      setFormData(prev => ({ ...prev, whatsapp: value }));
    }
  };

  const checkDuplicates = async () => {
    const waitlistRef = ref(database, "waitlist");
    const snapshot = await get(waitlistRef);
    
    if (!snapshot.exists()) return false;

    const entries = Object.values(snapshot.val());
    
    // Verificar email duplicado
    if (entries.some(entry => entry.email === formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: "Este email já está inscrito na lista de espera"
      }));
      return true;
    }

    // Verificar whatsapp duplicado
    if (entries.some(entry => entry.whatsapp === formData.whatsapp)) {
      setErrors(prev => ({
        ...prev,
        whatsapp: "Este WhatsApp já está inscrito na lista de espera"
      }));
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Verificar duplicatas antes de salvar
      const hasDuplicates = await checkDuplicates();
      if (hasDuplicates) {
        setIsSubmitting(false);
        return;
      }

      const waitlistRef = ref(database, "waitlist");
      await push(waitlistRef, {
        ...formData,
        createdAt: new Date().toISOString()
      });
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao realizar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-[#07325B] text-white rounded-lg p-6 flex flex-col items-center max-w-sm mx-auto">
          <div className="text-2xl mb-2">✓</div>
          <h3 className="text-xl font-semibold mb-2">Inscrição realizada com sucesso!</h3>
          <button
            onClick={() => setShowSuccess(false)}
            className="mt-4 px-6 py-2 bg-white text-[#07325B] rounded-full hover:bg-gray-100"
          >
            OK
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#07325B] mb-2">
            Seja o Primeiro a Usar a Dgenny
          </h2>
          <p className="text-gray-600">
            Entre na fila de espera e revolucione o seu departamento de compras
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome da sua empresa"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              className={`w-full p-3 border rounded-lg ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Seu WhatsApp"
              value={formData.whatsapp}
              onChange={handlePhoneChange}
              className={`w-full p-3 border rounded-lg ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#07325B] text-white py-3 rounded-lg hover:bg-[#07325B]/90 disabled:opacity-50"
          >
            {isSubmitting ? "Inscrevendo..." : "Inscrever"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;
