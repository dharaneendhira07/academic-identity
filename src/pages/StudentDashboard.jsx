import React from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { Download, Share2, CheckCircle, Clock } from 'lucide-react';

const StudentDashboard = () => {
    const certificates = [
        { id: 1, title: 'Bachelor of Computer Science', issuer: 'Greenwood University', date: '2023-05-20', status: 'verified', hash: '0x8f...3a2b' },
        { id: 2, title: 'Advanced React Certification', issuer: 'Online Academy', date: '2024-01-15', status: 'pending', hash: '0x1c...9d4e' },
    ];

    return (
        <div style={{ paddingTop: '100px', display: 'flex' }}>
            <Sidebar role="student" />
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', margin: 0 }}>My Certificates</h1>
                        <p style={{ color: 'var(--text-light)' }}>Manage and share your academic achievements.</p>
                    </div>
                    <button className="btn-primary">Add New</button>
                </header>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>
                                <th style={{ padding: '1rem' }}>Certificate Title</th>
                                <th style={{ padding: '1rem' }}>Issuer</th>
                                <th style={{ padding: '1rem' }}>Date</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                                <th style={{ padding: '1rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificates.map((cert) => (
                                <motion.tr
                                    key={cert.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ borderBottom: '1px solid #f3f4f6' }}
                                >
                                    <td style={{ padding: '1rem', fontWeight: 600 }}>{cert.title}</td>
                                    <td style={{ padding: '1rem' }}>{cert.issuer}</td>
                                    <td style={{ padding: '1rem' }}>{cert.date}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '999px',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            background: cert.status === 'verified' ? '#d1fae5' : '#fef3c7',
                                            color: cert.status === 'verified' ? '#065f46' : '#92400e'
                                        }}>
                                            {cert.status === 'verified' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                            {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                                        <button title="Download" style={{ padding: '0.5rem', borderRadius: '6px', background: 'transarent', color: 'var(--text-dark)', border: '1px solid #e5e7eb' }}>
                                            <Download size={18} />
                                        </button>
                                        <button title="Share" style={{ padding: '0.5rem', borderRadius: '6px', background: 'transarent', color: 'var(--text-dark)', border: '1px solid #e5e7eb' }}>
                                            <Share2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
