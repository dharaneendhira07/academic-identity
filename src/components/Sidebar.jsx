import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, CheckCircle, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ role }) => {
    return (
        <aside className="glass-panel" style={{
            width: '260px',
            height: 'calc(100vh - 100px)',
            position: 'fixed',
            top: '90px',
            left: '1rem',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            gap: '2rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                    {role === 'student' ? 'S' : 'U'}
                </div>
                <div>
                    <h4 style={{ margin: 0 }}>{role === 'student' ? 'Student' : 'Admin'}</h4>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{role === 'student' ? 'Student' : 'University'}</span>
                </div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <SidebarLink to={`/${role}-dashboard`} icon={<Home size={20} />} label="Dashboard" />
                <SidebarLink to="#" icon={<FileText size={20} />} label="Certificates" />
                {role === 'university' && (
                    <SidebarLink to="#" icon={<CheckCircle size={20} />} label="Issue New" />
                )}
                <SidebarLink to="#" icon={<Settings size={20} />} label="Settings" />
            </nav>

            <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-light)',
                background: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'all 0.2s',
                marginTop: 'auto'
            }}>
                <LogOut size={20} />
                <span>Log Out</span>
            </button>
        </aside>
    );
};

const SidebarLink = ({ to, icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? 'active-link' : ''}
        style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            color: isActive ? 'var(--primary-blue)' : 'var(--text-light)',
            background: isActive ? 'var(--light-blue)' : 'transparent',
            fontWeight: isActive ? 600 : 400,
            transition: 'all 0.2s'
        })}
    >
        {icon}
        <span>{label}</span>
    </NavLink>
);

export default Sidebar;
