module.exports = {
    title: '可视化文档编写',
    description: ' 可视化文档编写----各种图表表现语法测试',
    // theme: 'reco',
    base: '/visualization-document/',
    //  dest: 'public',
    plugins: [
        'autobar',
        'vuepress-plugin-mermaidjs',
        'vuepress-plugin-chart',
        '@maginapp/vuepress-plugin-katex',
        {
            delimiters: 'dollars'
        },
        '@renovamen/vuepress-plugin-md-plus', {
            'all': false,  // enable all features or not, this will rewrite all the following options
            'footnote': true,  // enable footnote or not
            'mark': true  //enable mark or not
        }
    ],
    themeConfig: {
        mdPlus: {
            all: true, // 全部启用
        },
        nav: [],
        sidebar: [

        ]
    }
}
