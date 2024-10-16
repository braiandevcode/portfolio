const queryAjax = async (url, options = null) => {
  try {
    const queryAjax = await fetch(url, options);
    if (!queryAjax.ok) {
      throw {
        status: queryAjax.status,
        statusText: queryAjax.statusText,
      };
    }

    const data = await queryAjax.json();
    if (data) {
      return data;
    }
  } catch (err) {
    let msg = `Error ${err.status}: ${err.statusText || "Ocurrio un error"}`;
    console.error(msg);
  }
};

export default queryAjax;
