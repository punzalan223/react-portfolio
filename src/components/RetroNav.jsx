function RetroNav({ column, background, children }) {
    return (
        <div className={`flex ${column == 2 ? 'justify-between' : 'justify-end'} ${background} py-3 px-5 relatiev`}>
            {children}
        </div>
    );
}

export default RetroNav;
