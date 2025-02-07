import style from './container.module.css';

function Container({children})
{
    return (
        <div classNameNameName={style.container}>
            {children}
        </div>
    );
}

export default Container;