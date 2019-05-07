const n_env = process.env.NODE_ENV == 'development';

class goodsIndex {
  async getIndex(ctx){
    await ctx.render('goods', {
        title: '后台商品管理系统',
        n_env
    })
  }
}

module.exports = goodsIndex;
