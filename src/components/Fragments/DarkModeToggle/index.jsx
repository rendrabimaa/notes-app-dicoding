import Toggle from "../../Elements/Toggle"

const DarkModeToggle = () => {
    return (
        <>
            <Toggle toggleDarkMode={toggleDarkMode}>
                { isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Toggle>
        </>
    )
}

export default DarkModeToggle;