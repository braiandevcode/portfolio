const dowloadCv = (e)=>{
    const url = e.target.href;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`<embed src="${url}" width="100%" height="100%">`);
    nuevaVentana.document.close();
}
export default dowloadCv;