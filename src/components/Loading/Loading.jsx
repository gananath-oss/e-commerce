import style from './loading.module.css'

const Loading = () => {
  return (
    <div className=" relative top-0 left-0 h-screen w-screen flex items-center justify-center">
      <div className={style.loadingPulse}></div>
    </div>
  );
};

export default Loading;
