export default {
  formatDate: (time = new Date(), format = 'YY-MM-DD hh:mm:ss') => {
    const v_list = {
      //年
      YY: time.getFullYear(),
      //月
      MM: time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1,
      //日
      DD: time.getDate() < 10 ? '0' + time.getDate() : time.getDate(),
      //时
      hh: time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
      //分
      mm: time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
      //秒
      ss: time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    };
    return [
      {
        id: format.indexOf('YY'),
        v: v_list.YY + format.charAt(format.indexOf('YY') + 2)
      },
      {
        id: format.indexOf('MM'),
        v: v_list.MM + format.charAt(format.indexOf('MM') + 2)
      },
      {
        id: format.indexOf('DD'),
        v: v_list.DD + format.charAt(format.indexOf('DD') + 2)
      },
      {
        id: format.indexOf('hh'),
        v: v_list.hh + format.charAt(format.indexOf('hh') + 2)
      },
      {
        id: format.indexOf('mm'),
        v: v_list.mm + format.charAt(format.indexOf('mm') + 2)
      },
      {
        id: format.indexOf('ss'),
        v: v_list.ss + format.charAt(format.indexOf('ss') + 2)
      }
    ]
      .filter(v => v.id > -1)
      .reduce((a, b) => a + b.v, '');
  }
};
