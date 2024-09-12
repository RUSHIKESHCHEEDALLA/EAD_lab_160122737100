import { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strength = 0;

    // Add points for each condition met
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;

    // Determine the strength message
    switch (strength) {
      case 0:
      case 1:
        setStrengthMessage("Very Weak");
        break;
      case 2:
        setStrengthMessage("Weak");
        break;
      case 3:
        setStrengthMessage("Moderate");
        break;
      case 4:
        setStrengthMessage("Strong");
        break;
      case 5:
        setStrengthMessage("Very Strong");
        break;
      default:
        setStrengthMessage("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {password && (
        <div>
          <p>Password Strength: <strong>{strengthMessage}</strong></p>
        </div>
      )}
    </div>
  );
};

export default PasswordChecker;
