export const CalculatorConstant = Object.freeze({
  儲存鍵: {
    手續費折扣: '手續費折扣',
    最低手續費: '最低手續費',
    試算結果數量: '試算結果數量',
    排序: '排序',
    顯示等級: '顯示等級',
    小數位數: '小數位數',
    字體大小: '字體大小',
  },
  交易類別: {
    股票: '股票',
    股票當沖: '股票當沖',
    ETF: 'ETF',
  },
  手續費費率: {
    證券經紀商: 1.425 / 1000,
  },
  證券交易稅稅率: {
    股票: 3 / 1000,
    股票當沖: 1.5 / 1000,
    指數股票型基金: 1 / 1000,
  },
  交易參數: {
    最小交易股數: 0,
    最小買入價格: 0,
    最小賣出價格: 0,
    最小手續費折扣: 0,
    最小最低手續費: 0,
    最大交易股數: 100000000,
    最大買入價格: 10000,
    最大賣出價格: 10000,
    最大手續費折扣: 10,
    最大最低手續費: 20,
  },
  排序: {
    由小到大: 'asc',
    由大到小: 'desc',
  },
  試算結果: {
    預設: 5,
    最小: 0,
    最大: 100,
  },
  顯示等級: {
    預設: 1,
    最小: 1,
    最大: 3,
  },
  小數位數: {
    預設: 0,
    最小: 0,
    最大: 2,
  },
  字體大小: {
    預設: 1,
    最小: 1,
    最大: 1.25,
  },
});

export default CalculatorConstant;
