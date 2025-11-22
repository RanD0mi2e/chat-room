import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        account: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = () => {
        console.log('Logging in with:', formData);
        // Mock login success
        navigate('/main_window');
    };

    const handleCreateAccount = () => {
        console.log('Create account clicked');
        // TODO: Implement create account flow
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div
                    onClick={() => navigate('/main_window')}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '20px',
                        opacity: 0.8
                    }}
                    title="Back to Dashboard"
                >
                    ←
                </div>
                <h1 className={styles.title}>Welcome Back</h1>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Account</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            name="account"
                            className={styles.input}
                            placeholder="Username or Email"
                            value={formData.account}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className={styles.input}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <span
                            className={styles.eyeIcon}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                </div>

                <div className={styles.actions}>
                    <span className={styles.link} onClick={handleCreateAccount}>Create Account</span>
                    <span className={styles.link} onClick={() => navigate('/forgot_password')}>Forgot Password?</span>
                </div>

                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.secondaryButton}`} onClick={handleCreateAccount}>
                        Sign Up
                    </button>
                    <button className={`${styles.button} ${styles.primaryButton}`} onClick={handleLogin}>
                        Login
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>Or continue with</span>
                </div>

                <div className={styles.socialLogin}>
                    <div className={styles.socialIcon} title="Google">G</div>
                    <div className={styles.socialIcon} title="GitHub">gh</div>
                    <div className={styles.socialIcon} title="WeChat">W</div>
                </div>
            </div>
        </div>
    );
}
