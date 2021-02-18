import { useCallback, useState } from "react";
function useForm(initialState, onSubmit) {
  console.log("sdfbdgsbn", initialState);
  const [form, setForm] = useState(initialState);
  const handleChange = useCallback((event) => {
    event.persist();
    setForm((form) => ({
      ...form,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }, []);
  console.log("dsbfnlo",form)
  const resetForm = useCallback(() => {
    setForm(initialState);
  }, [initialState]);
  return {
    form,
    handleChange,
    resetForm,
    setForm,
  };
}
export default useForm;
