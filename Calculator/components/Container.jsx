import style from './Container.module.css'

function Container({children})
{
    return (
        <div classNameNameName={style.container}>
            {children}
        </div>
    );
}
export default Container;