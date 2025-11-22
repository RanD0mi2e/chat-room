import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [account, setAccount] = useState('');
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Step 1: Account Input
    const handleAccountSubmit = () => {
        if (account.trim()) {
            setStep(2);
        }
    };

    // Step 2: Verification Code
    const handleCodeChange = (index: number, value: string) => {
        if (value.length > 1) return; // Prevent multiple chars

        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = verificationCode.join('');
        if (code.length === 6) {
            setStep(3);
        }
    };

    // Step 3: Success & Redirect
    useEffect(() => {
        if (step === 3) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [step, navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {step === 1 && (
                    <>
                        <h1 className={styles.title}>Find Your Account</h1>
                        <p className={styles.subtitle}>Enter your account or email to search</p>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Account / Email</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Enter account or email"
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </div>

                        <button className={styles.button} onClick={handleAccountSubmit}>
                            Next Step
                        </button>
                        <div className={styles.backLink} onClick={() => navigate('/login')}>
                            Back to Login
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h1 className={styles.title}>Verification</h1>
                        <p className={styles.subtitle}>Enter the 6-digit code sent to your email</p>

                        <div className={styles.codeContainer}>
                            {verificationCode.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={el => inputRefs.current[index] = el}
                                    type="text"
                                    className={styles.codeInput}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    maxLength={1}
                                />
                            ))}
                        </div>

                        <button className={styles.button} onClick={handleVerify}>
                            Verify Code
                        </button>
                        <div className={styles.backLink} onClick={() => setStep(1)}>
                            Back to Previous Step
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className={styles.successIcon}>🎉</div>
                        <h1 className={styles.title}>Success!</h1>
                        <p className={styles.subtitle}>
                            Password reset successfully.<br />
                            Redirecting to login page...
                        </p>

                        <div className={styles.backLink} onClick={() => navigate('/login')}>
                            Return immediately
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
