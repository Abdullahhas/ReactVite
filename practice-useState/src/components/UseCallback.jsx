import React, { useCallback, useEffect, useState } from 'react';

const UseCallback = () => {
  const [password, setPassword] = useState('');
  const [isNumb, setIsNumb] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGen = useCallback(() => {
    let length = 9;
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isNumb) {
      str += '0123456789';
    }

    if (charAllowed) {
      str += '!@#$%^&*-_+=[]{}~`';
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [isNumb, charAllowed]); // depends on toggled states

  // 🔁 Auto-generate password when checkboxes change
  useEffect(() => {
    passwordGen();
  }, [passwordGen]);

  return (
    <>
      <h3>Generated Password</h3>
      <input type="text" value={password} readOnly />

      <div>
        <label>
          <input
            type="checkbox"
            checked={isNumb}
            onChange={() => setIsNumb(prev => !prev)}
          />
          Include Numbers
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          Include Special Characters
        </label>
      </div>
    </>
  );
};

export default UseCallback;
