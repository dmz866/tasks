import Button from "./Button";

const Header = ({ title, onShow }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onShow} />
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker'
};

export default Header;
