import './Switch.css';
import cx from 'classnames';

const Switch = (props: any) => {
  const {isToggled, onToggle} = props
    
    const moColorChange = cx('monthly',{
        'toggled': !isToggled
    })

    const yrColorChange = cx('yearly',{
        'toggled': !isToggled
    })
    
  return (
    <div className='switch-d'>

      <div className='switch-class'>
        <h5 className={moColorChange}>Monthly</h5>
        <label className="switch">
          <input type="checkbox" checked={isToggled} onChange={onToggle}/>
          <span className="slider"/>
        </label>
        <h5 className={yrColorChange}>Yearly</h5>
      </div>
    </div>
  )
}

export default Switch