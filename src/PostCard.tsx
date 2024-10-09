import React from 'react';
import './PostCard.css';


export default function PostCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="post-card">
            {children}
        </div>
    );
}

PostCard.Title = function PostCardTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="post-card-title">{children}</h2>;
};

PostCard.Description = function PostCardDescription({ children }: { children: React.ReactNode }) {
    return <p className="post-card-description">{children}</p>;
};

PostCard.PrimaryButton = function PostCardPrimaryButton({ children }: { children: React.ReactNode }) {
    return <button className="primary-button">{children}</button>;
};

PostCard.SecondaryButton = function PostCardSecondaryButton({ children }: { children: React.ReactNode }) {
    return <button className="secondary-button">{children}</button>;
};
