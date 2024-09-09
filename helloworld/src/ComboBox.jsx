import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

function ComboBox() {
  const [selectedItem, setSelectedItem] = createSignal(""); // To track selected value
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedItem(value);

    // Navigate based on the selected value
    if (value === "wallets") {
      navigate("/wallets");
    } else if (value === "transfers") {
      navigate("/transfers");
    }
  };

  return (
    <select value={selectedItem()} onChange={handleSelectChange}>
      <option value="">Select an option</option>
      <option value="wallets">Wallets</option>
      <option value="transfers">Transfers</option>
    </select>
  );
}

export default ComboBox;