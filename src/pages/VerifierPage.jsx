import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Search, CheckCircle, XCircle } from 'lucide-react';

const VerifierPage = () => {
    const [verificationResult, setVerificationResult] = useState(null); // null, 'verified', 'invalid'
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock simulation
        setTimeout(() => {
            setIsLoading(false);
            setVerificationResult(Math.random() > 0.5 ? 'verified' : 'invalid');
        }, 1500);
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h1 className="heading-lg" style={{ fontSize: '2.5rem' }}>Verify a Certificate</h1>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                    Upload a document or enter the Certificate ID to verify authentic credentials.
                </p>
            </motion.div>

            <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <div
                        style={{
                            border: '2px dashed #cbd5e1',
                            borderRadius: '12px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.5)',
                            transition: 'all 0.2s'
                        }}
                    // Add hover effect via CSS or state
                    >
                        <Upload size={48} style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }} />
                        <h3 style={{ margin: '0 0 0.5rem' }}>Drag & Drop Certificate</h3>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>or click to browse PDF files</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                    <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>OR VERIFY BY ID</span>
                    <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>
                </div>

                <form onSubmit={handleVerify} style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                        <input
                            type="text"
                            placeholder="Enter Certificate Hash ID"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 3rem',
                                borderRadius: '8px',
                                border: '1px solid #e5e7eb',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <button className="btn-primary" disabled={isLoading} style={{ minWidth: '100px' }}>
                        {isLoading ? 'Verifying...' : 'Verify'}
                    </button>
                </form>
            </div>

            <AnimatePresence>
                {verificationResult && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass-panel"
                        style={{
                            marginTop: '2rem',
                            padding: '2rem',
                            width: '100%',
                            maxWidth: '600px',
                            borderLeft: `6px solid ${verificationResult === 'verified' ? '#10b981' : '#ef4444'}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{
                            padding: '1rem',
                            borderRadius: '50%',
                            background: verificationResult === 'verified' ? '#d1fae5' : '#fee2e2',
                            color: verificationResult === 'verified' ? '#059669' : '#b91c1c'
                        }}>
                            {verificationResult === 'verified' ? <CheckCircle size={32} /> : <XCircle size={32} />}
                        </div>
                        <div>
                            <h3 style={{ margin: '0 0 0.25rem', color: verificationResult === 'verified' ? '#059669' : '#b91c1c' }}>
                                {verificationResult === 'verified' ? 'Valid Certificate' : 'Invalid Certificate'}
                            </h3>
                            <p style={{ margin: 0, color: 'var(--text-light)' }}>
                                {verificationResult === 'verified'
                                    ? 'This certificate was issued by Greenwood University on May 20, 2023.'
                                    : 'We could not verify this certificate on the blockchain.'}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VerifierPage;
