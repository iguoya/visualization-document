module.exports = {
    title: '可视化文档编写',
    description: ' 可视化文档编写----各种图表表现语法测试',
    // theme: 'reco',
    base: '/visualization-document/',
    //  dest: 'public',
    plugins: [
        'autobar',
        'vuepress-plugin-mermaidjs',
        '@maginapp/vuepress-plugin-katex',
        {
            delimiters: 'dollars'
        }
    ],
    themeConfig: {
        nav: [],
        sidebar: [

        ]
    }
}