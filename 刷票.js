function brushVotes () {   // 刷票函数
  var t = setInterval(function () {
    var three_num = $('#person3>p>span').text()  // three票数
    var two_num = $('#person2>p>span').text()   // two票数
    console.info(two_num + '  ' + three_num)

    if (two_num - three_num < 5) {   // 要保持领先5票的优势
      $('#person2>button').click().attr('disabled', false) // 触发投票的事件click,投完后记得把投票权限拿回来
    }
    if (two_num - three_num == 5) {  // 5票领先了就此打住
      clearInterval(t)
    }
  }, 2000)
}
