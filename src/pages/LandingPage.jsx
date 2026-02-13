import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section className="page-container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <motion.h1
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Secure Academic Identity <br /> on Blockchain
                </motion.h1>
                <motion.p
                    style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 2rem' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Issue, store, and verify academic credentials with immutable blockchain technology.
                    Tamper-proof and instantly verifiable.
                </motion.p>

                <motion.div
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Link to="/register" className="btn-primary">Get Started</Link>
                    <Link to="/verify" className="btn-outline">Verify Certificate</Link>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="page-container" style={{ padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <FeatureCard
                    icon={<ShieldCheck size={40} color="var(--primary-blue)" />}
                    title="Tamper-Proof"
                    description="Credentials stored on the blockchain cannot be altered or forged."
                />
                <FeatureCard
                    icon={<Award size={40} color="var(--primary-blue)" />}
                    title="Instant Verification"
                    description="Verifiers can instantly check the validity of any certificate."
                />
                <FeatureCard
                    icon={<Upload size={40} color="var(--primary-blue)" />}
                    title="Easy Issuance"
                    description="Universities can issue bulk certificates with a single click."
                />
            </section>

            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-light)', marginTop: '4rem' }}>
                <p>&copy; 2024 AcademicChain. All rights reserved.</p>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        className="glass-panel"
        style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        whileHover={{ scale: 1.05 }}
    >
        <div style={{ background: 'var(--light-blue)', padding: '1rem', borderRadius: '50%' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', margin: '0' }}>{title}</h3>
        <p style={{ color: 'var(--text-light)' }}>{description}</p>
    </motion.div>
);

export default LandingPage;
