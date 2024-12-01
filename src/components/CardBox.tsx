import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import './card-box.scss';

interface CardBoxProps {
  children: React.ReactNode;
}

function CardBox({ children }: CardBoxProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="card-box" ref={cardRef}>
            {children}
        </div>
    );
}

CardBox.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardBox;