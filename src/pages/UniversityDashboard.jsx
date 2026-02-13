import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { Upload, FileText, Check } from 'lucide-react';

const UniversityDashboard = () => {
    const [issued, setIssued] = useState(false);

    const handleIssue = (e) => {
        e.preventDefault();
        setIssued(true);
        setTimeout(() => setIssued(false), 3000);
    };

    return (
        <div style={{ paddingTop: '100px', display: 'flex' }}>
            <Sidebar role="university" />
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem' }}>
                <header style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', margin: 0 }}>Issue Certificate</h1>
                    <p style={{ color: 'var(--text-light)' }}>Create and issue new blockchain-verified certificates.</p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem' }}>
                    <motion.div
                        className="glass-panel"
                        style={{ padding: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <form onSubmit={handleIssue} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Student Name</label>
                                <input type="text" className="input-field" placeholder="Enter student name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Student ID</label>
                                <input type="text" className="input-field" placeholder="Student ID number" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Degree / Course</label>
                                <input type="text" className="input-field" placeholder="e.g. Bachelor of Science" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Upload Certificate PDF</label>
                                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '2rem', textAlign: 'center', cursor: 'pointer' }}>
                                    <Upload size={32} style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }} />
                                    <p style={{ color: 'var(--text-light)' }}>Click to upload or drag and drop</p>
                                </div>
                            </div>

                            <button className="btn-primary" style={{ marginTop: '1rem' }}>Issue on Blockchain</button>
                        </form>
                    </motion.div>

                    {/* Recent Activity or Transaction Status */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ margin: '0 0 1rem' }}>Transaction Status</h3>
                            {issued ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ padding: '1rem', background: '#d1fae5', borderRadius: '8px', color: '#065f46', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Check size={20} />
                                    <div>
                                        <strong>Success!</strong>
                                        <p style={{ margin: 0, fontSize: '0.875rem' }}>TxHash: 0x7f...9a12</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>No active transactions.</p>
                            )}
                        </div>

                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ margin: '0 0 1rem' }}>Recent Issues</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ padding: '0.5rem', background: 'var(--light-blue)', borderRadius: '6px' }}><FileText size={16} /></div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: 500 }}>John Doe</p>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>B.Sc. Computer Science</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UniversityDashboard;
