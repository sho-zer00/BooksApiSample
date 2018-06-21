# BooksApiSample
GoogleBooksApiを使って見たサンプル

今日見ているサイト集
https://itsakura.com/csharp-form-textbox
サンプル
システムを使用する。
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace formtest1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show(textBox1.Text);
        }
    }
}
//テキスタイル等の処理
http://www.kisoplus.com/sample/button.html
//ラベルのサイズ等の資料
https://dobon.net/vb/dotnet/form/setdesktoplocation.html

http://ufcpp.net/study/csharp/lib_forms.html
