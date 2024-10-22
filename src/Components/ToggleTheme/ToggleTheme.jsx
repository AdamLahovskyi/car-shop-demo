import useTheme from '../../hooks/useTheme';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ToggleTheme.css'

const ToggleTheme = () =>{
  const [theme, toggleTheme] = useTheme();

  return (
    <div className='theme-toggle' onClick={toggleTheme}>
      <h2>{theme === 'light' ? 'Light Theme': 'Dark Theme'}</h2>
      <i className={`fas fa-toggle-${theme === 'light' ? 'on' : 'off'}`}></i>
    </div>
  )
}

export default ToggleTheme;
