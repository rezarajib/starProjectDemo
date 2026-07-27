import React, { useEffect, useState } from 'react';

const Parts = () => {
    const [allParts, setAllParts] = useState([]);
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("partsData.json")
            .then(res => res.json())
            .then(data => {
                setAllParts(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleAddToCart = (part) => {
        setCart((prevCart) => [...prevCart, part]);
        setMessage(`Success! "${part.name}" has been added to your cart.`);
        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    const styles = {
        container: {
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '40px 24px',
            fontFamily: "'Inter', sans-serif",
            backgroundColor: '#f3f4f6',
            minHeight: '100vh',
        },
        headerSection: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px',
        },
        heading: {
            color: '#1f2937',
            fontSize: '2.25rem',
            fontWeight: '800',
            letterSpacing: '-0.025em',
            margin: 0,
        },
        cartBadge: {
            backgroundColor: '#ffffff',
            padding: '10px 20px',
            borderRadius: '50px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            fontWeight: '600',
            color: '#4f46e5',
            fontSize: '0.95rem',
        },
        alertBox: {
            backgroundColor: '#d1fae5',
            color: '#065f46',
            padding: '12px 20px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontWeight: '500',
            textAlign: 'center',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #e5e7eb',
        },
        imageWrapper: {
            width: '100%',
            height: '200px',
            backgroundColor: '#f9fafb',
            overflow: 'hidden',
            position: 'relative',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
        },
        cardBody: {
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '10px',
        },
        description: {
            fontSize: '0.9rem',
            color: '#4b5563',
            lineHeight: '1.6',
            marginBottom: '20px',
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid #f3f4f6',
        },
        price: {
            fontSize: '1.25rem',
            fontWeight: '800',
            color: '#4f46e5',
        },
        buttonGroup: {
            display: 'flex',
            gap: '8px',
        },
        button: {
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            transition: 'background-color 0.2s ease',
        },
        secondaryButton: {
            backgroundColor: '#e0e7ff',
            color: '#4f46e5',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            transition: 'background-color 0.2s ease',
        },
        loader: {
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b7280',
            marginTop: '80px',
            fontWeight: '500',
        },
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        modalContent: {
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            position: 'relative',
        },
        closeButton: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6b7280',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.headerSection}>
                <h2 style={styles.heading}>Explore Premium Parts</h2>
                <div style={styles.cartBadge}>
                    🛒 Cart Items: <span style={{ color: '#111827' }}>{cart.length}</span>
                </div>
            </div>

            {message && <div style={styles.alertBox}>{message}</div>}
            
            {allParts.length === 0 ? (
                <p style={styles.loader}>Loading high-quality products...</p>
            ) : (
                <div style={styles.grid}>
                    {allParts.map((part) => (
                        <div key={part.id || part._id} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <img
                                    src={part.image || "https://placehold.co/300x200?text=No+Image"}
                                    alt={part.name}
                                    style={styles.image}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/300x200?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            
                            <div style={styles.cardBody}>
                                <div>
                                    <h3 style={styles.title}>{part.name}</h3>
                                    <p style={styles.description}>
                                        {part.description ? (part.description.length > 90 ? part.description.slice(0, 90) + '...' : part.description) : 'No description available for this part.'}
                                    </p>
                                </div>
                                
                                <div style={styles.footer}>
                                    <span style={styles.price}>${part.price}</span>
                                    <div style={styles.buttonGroup}>
                                        <button
                                            style={styles.secondaryButton}
                                            onClick={() => setSelectedProduct(part)}
                                        >
                                            Details
                                        </button>
                                        
                                        {/* Buy Now টেক্সট পরিবর্তন করে Add to Cart করা হয়েছে */}
                                        <button
                                            style={styles.button}
                                            onClick={() => handleAddToCart(part)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedProduct && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <button
                            style={styles.closeButton}
                            onClick={() => setSelectedProduct(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct.image || "https://placehold.co/300x200?text=No+Image"}
                            alt={selectedProduct.name}
                            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/300x200?text=Image+Not+Found";
                            }}
                        />
                        <h2 style={{ color: '#111827', marginBottom: '10px' }}>{selectedProduct.name}</h2>
                        <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
                            {selectedProduct.description || 'No detailed description available.'}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#4f46e5' }}>
                                ${selectedProduct.price}
                            </span>
                            <button
                                style={styles.button}
                                onClick={() => {
                                    handleAddToCart(selectedProduct);
                                    setSelectedProduct(null);
                                }}
                            >
                                Add to Cart & Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Parts;