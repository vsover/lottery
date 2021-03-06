/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  14-12-19
 * @description
 *
 */

/**
 * 抽取到第一个中奖的号码
 * @param sz    今天的上证指数
 * @param ss    今天的收盘时的深证指数
 * @param totalPeople   参与活动的人数
 * @param count
 */
function getLucker(sz, ss, totalPeople, count) {
    var result = [];
    if (count === 0) {
      throw new Error('The param count should not be zereo!');
    }
    seed = Math.floor(totalPeople / count);
    console.log(seed);
    var base = sz * ss * 10000;

    base = base.toString().split('').reverse().join(''); // 反转

    base = parseInt(base); // 取整
    var luckNum = (base % totalPeople) + 1;
    result.push(luckNum);
    var currentNum = luckNum;
    for (var i = 1; i < count; i++) {
      var nextNum = (currentNum + seed * i) % totalPeople; // 下一个中奖用户
      if (result.indexOf(nextNum) == -1) { // 如果不存在,则添加这个数
        result.push(nextNum);
        continue;
      }
      count++;

    }
    return result;
  }
  //var luckerString = getLucker(3039.21, 10614.12, 1133261, 2);
  //console.log(luckerString);