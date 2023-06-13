define(["require", "exports", "../src/index", "@syncfusion/ej2-base", "@syncfusion/ej2-navigations", "@syncfusion/ej2-inputs", "@syncfusion/ej2-dropdowns"], function (require, exports, index_1, ej2_base_1, ej2_navigations_1, ej2_inputs_1, ej2_dropdowns_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var insert_table_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-table-icon-insert" id="insert_table_cells" style="width:auto";><span class="e-btn-icon e-de-icon-table-inserttable tb-icons e-icons"></span><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:28px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var delete_table_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-table-icon-delete" id="delete_table_cells" style="width:auto";><span class="e-btn-icon e-de-icon-table-deletetable tb-icons e-icons"></span><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:28px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var orientation_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-icon-find" id="orientation" style="width:auto";><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:20px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var margin_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-icon-cut" id="margin" style="width:auto";><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:20px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var size_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-icon-fitpagewidth" id="size" style="width:auto";><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:20px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var bullet_list_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-list-icon-bullet" id="bullet_lists" style="width:auto";><span class="e-btn-icon e-de-icon-bulletlist tb-icons e-icons"></span><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:28px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var number_list_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-list-icon-number" id="number_lists" style="width:auto";><span class="e-btn-icon e-de-icon-numberedlist tb-icons e-icons"></span><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:28px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var multilevel_list_element = '<button class="e-tbar-btn e-control e-btn e-icon-btn e-de-list-icon-multilevel-list" id="multilevel_lists" style="width:auto";><span class="e-btn-icon e-de-icon-multilevel-list tb-icons e-icons"></span><span class="e-input-group-icon e-spin-down e-icons" style="width:28px;height:28px;padding-left:5px;margin-right:4px;font-size:12px;"></span></button>';
    var dropDownTemplate = '<input type="text" id="style" />';
    ej2_base_1.L10n.load({
        'ar-AE': {
            'documenteditor': {
                'Table': 'لجدول',
                'Row': 'لصف',
                'Cell': 'الخليه',
                'Ok': 'موافق',
                'Cancel': 'إلغاء الأمر',
                'Size': 'حجم',
                'Preferred Width': 'العرض المفضل',
                'Points': 'نقاط',
                'Percent': 'المائه',
                'Measure in': 'القياس في',
                'Alignment': 'محاذاه',
                'Left': 'ليسار',
                'Center': 'مركز',
                'Right': 'الحق',
                'Justify': 'تبرير',
                'Indent from left': 'مسافة بادئه من اليسار',
                'Borders and Shading': 'الحدود والتظليل',
                'Options': 'خيارات',
                'Specify height': 'تحديد الارتفاع',
                'At least': 'الاقل',
                'Exactly': 'تماما',
                'Row height is': 'ارتفاع الصف هو',
                'Allow row to break across pages': 'السماح بفصل الصف عبر الصفحات',
                'Repeat as header row at the top of each page': 'تكرار كصف راس في اعلي كل صفحه',
                'Vertical alignment': 'محاذاة عمودي',
                'Top': 'أعلى',
                'Bottom': 'اسفل',
                'Default cell margins': 'هوامش الخلية الافتراضية',
                'Default cell spacing': 'تباعد الخلايا الافتراضي',
                'Allow spacing between cells': 'السماح بالتباعد بين الخلايا',
                'Cell margins': 'هوامش الخلية',
                'Same as the whole table': 'نفس الجدول بأكمله',
                'Borders': 'الحدود',
                'None': 'اي',
                'Single': 'واحد',
                'Dot': 'نقطه',
                'DashSmallGap': 'داشسمجاب',
                'DashLargeGap': 'الاتحاد الخاص',
                'DashDot': 'داشدوت',
                'DashDotDot': 'ددهدودوت',
                'Double': 'انقر نقرا مزدوجا',
                'Triple': 'الثلاثي',
                'ThinThickSmallGap': 'فجوه صغيره سميكه رقيق',
                'ThickThinSmallGap': 'الفجوة الصغيرة رقيقه سميكه',
                'ThinThickThinSmallGap': 'صغيره سميكه رقيقه الفجوة الصغيرة',
                'ThinThickMediumGap': 'فجوه متوسطه سميك',
                'ThickThinMediumGap': 'سميكه الفجوة متوسطه رقيقه',
                'ThinThickThinMediumGap': 'رقيقه سميكه متوسطه الفجوة',
                'ThinThickLargeGap': 'الفجوة الكبيرة رقيقه سميكه',
                'ThickThinLargeGap': 'فجوه كبيره رقيقه سميك',
                'ThinThickThinLargeGap': 'رقيقه سميكه الفجوة الكبيرة',
                'SingleWavy': 'واحد مائج',
                'DoubleWavy': 'مزدوج مائج',
                'DashDotStroked': 'اندفاعه نقطه القوية',
                'Emboss3D': 'D3مزخرف',
                'Engrave3D': 'D3نقش',
                'Outset': 'البدايه',
                'Inset': 'الداخلي',
                'Thick': 'سميكه',
                'Style': 'نمط',
                'Width': 'عرض',
                'Height': 'ارتفاع',
                'Letter': 'رساله',
                'Tabloid': 'التابلويد',
                'Legal': 'القانونيه',
                'Statement': 'بيان',
                'Executive': 'التنفيذي',
                'A3': 'A3',
                'A4': 'A4',
                'A5': 'A5',
                'B4': 'B4',
                'B5': 'B5',
                'Custom Size': 'حجم مخصص',
                'Different odd and even': 'مختلفه غريبه وحتى',
                'Different first page': 'الصفحة الاولي مختلفه',
                'From edge': 'من الحافة',
                'Header': 'راس',
                'Footer': 'تذييل الصفحه',
                'Margin': 'الهوامش',
                'Paper': 'الورق',
                'Layout': 'تخطيط',
                'Orientation': 'التوجه',
                'Landscape': 'المناظر الطبيعيه',
                'Portrait': 'صوره',
                'Table Of Contents': 'جدول المحتويات',
                'Show page numbers': 'إظهار أرقام الصفحات',
                'Right align page numbers': 'محاذاة أرقام الصفحات إلى اليمين',
                'Nothing': 'شيء',
                'Tab leader': 'قائد علامة التبويب',
                'Show levels': 'إظهار المستويات',
                'Use hyperlinks instead of page numbers': 'استخدام الارتباطات التشعبية بدلا من أرقام الصفحات',
                'Build table of contents from': 'بناء جدول محتويات من',
                'Styles': 'انماط',
                'Available styles': 'الأنماط المتوفرة',
                'TOC level': 'مستوي جدول المحتويات',
                'Heading': 'عنوان',
                'Heading 1': 'عنوان 1',
                'Heading 2': 'عنوان 2',
                'Heading 3': 'عنوان 3',
                'Heading 4': 'عنوان 4',
                'Heading 5': 'عنوان 5',
                'Heading 6': 'عنوان 6',
                'List Paragraph': 'فقره القائمة',
                'Normal': 'العاديه',
                'Outline levels': 'مستويات المخطط التفصيلي',
                'Table entry fields': 'حقول إدخال الجدول',
                'Modify': 'تعديل',
                'Color': 'لون',
                'Setting': 'اعداد',
                'Box': 'مربع',
                'All': 'جميع',
                'Custom': 'المخصصه',
                'Preview': 'معاينه',
                'Shading': 'التظليل',
                'Fill': 'ملء',
                'Apply To': 'تنطبق علي',
                'Table Properties': 'خصائص الجدول',
                'Cell Options': 'خيارات الخلية',
                'Table Options': 'خيارات الجدول',
                'Insert Table': 'ادراج جدول',
                'Number of columns': 'عدد الاعمده',
                'Number of rows': 'عدد الصفوف',
                'Text to display': 'النص الذي سيتم عرضه',
                'Address': 'عنوان',
                'Insert Hyperlink': 'ادراج ارتباط تشعبي',
                'Edit Hyperlink': 'تحرير ارتباط تشعبي',
                'Insert': 'ادراج',
                'General': 'العامه',
                'Indentation': 'المسافه البادئه',
                'Before text': 'قبل النص',
                'Special': 'الخاصه',
                'First line': 'السطر الأول',
                'Hanging': 'معلقه',
                'After text': 'بعد النص',
                'By': 'من',
                'Before': 'قبل',
                'Line Spacing': 'تباعد الأسطر',
                'After': 'بعد',
                'At': 'في',
                'Multiple': 'متعدده',
                'Spacing': 'تباعد',
                'Define new Multilevel list': 'تحديد قائمه متعددة الاصعده جديده',
                'List level': 'مستوي القائمة',
                'Choose level to modify': 'اختر المستوي الذي تريد تعديله',
                'Level': 'مستوي',
                'Number format': 'تنسيق الأرقام',
                'Number style for this level': 'نمط الرقم لهذا المستوي',
                'Enter formatting for number': 'إدخال تنسيق لرقم',
                'Start at': 'بداية من',
                'Restart list after': 'أعاده تشغيل قائمه بعد',
                'Position': 'موقف',
                'Text indent at': 'المسافة البادئة للنص في',
                'Aligned at': 'محاذاة في',
                'Follow number with': 'اتبع الرقم مع',
                'Tab character': 'حرف علامة التبويب',
                'Space': 'الفضاء',
                'Arabic': 'العربية',
                'UpRoman': 'حتى الروماني',
                'LowRoman': 'الرومانية منخفضه',
                'UpLetter': '',
                'LowLetter': '',
                'Number': 'عدد',
                'Leading zero': 'يؤدي صفر',
                'Bullet': 'رصاصه',
                'Ordinal': 'الترتيبيه',
                'Ordinal Text': 'النص الترتيبي',
                'For East': 'للشرق',
                'No Restart': 'لا أعاده تشغيل',
                'Font': 'الخط',
                'Font style': 'نمط الخط',
                'Underline style': 'نمط التسطير',
                'Font color': 'لون الخط',
                'Effects': 'الاثار',
                'Strikethrough': 'يتوسطه',
                'Superscript': 'مرتفع',
                'Subscript': 'منخفض',
                'Double strikethrough': 'خط مزدوج يتوسطه خط',
                'Regular': 'العاديه',
                'Bold': 'جريئه',
                'Italic': 'مائل',
                'Cut': 'قطع',
                'Copy': 'نسخ',
                'Paste': 'لصق',
                'Hyperlink': 'الارتباط التشعبي',
                'Open Hyperlink': 'فتح ارتباط تشعبي',
                'Copy Hyperlink': 'نسخ ارتباط تشعبي',
                'Remove Hyperlink': 'أزاله ارتباط تشعبي',
                'Paragraph': 'الفقره',
                'Linked Style': 'مرتبط (فقره وحرف)',
                'Character': 'حرف',
                'Merge Cells': 'دمج الخلايا',
                'Insert Above': 'ادراج أعلاه',
                'Insert Below': 'ادراج أدناه',
                'Insert Left': 'ادراج إلى اليسار',
                'Insert Right': 'ادراج اليمين',
                'Delete': 'حذف',
                'Delete Table': 'حذف جدول',
                'Delete Row': 'حذف صف',
                'Delete Column': 'حذف عمود',
                'File Name': 'اسم الملف',
                'Format Type': 'نوع التنسيق',
                'Save': 'حفظ',
                'Navigation': 'التنقل',
                'Results': 'نتائج',
                'Replace': 'استبدال',
                'Replace All': 'استبدال الكل',
                'We replaced all': 'استبدلنا جميع',
                'Find': 'العثور',
                'No matches': 'لا توجد تطابقات',
                'All Done': 'كل القيام به',
                'Result': 'نتيجه',
                'of': 'من',
                'instances': 'الحالات',
                'with': 'مع',
                'Click to follow link': 'انقر لمتابعه الارتباط',
                'Continue Numbering': 'متابعه الترقيم',
                'Bookmark name': 'اسم الإشارة المرجعية',
                'Close': 'اغلاق',
                'Restart At': 'أعاده التشغيل عند',
                'Properties': 'خصائص',
                'Name': 'اسم',
                'Style type': 'نوع النمط',
                'Style based on': 'نمط استنادا إلى',
                'Style for following paragraph': 'نمط للفقرة التالية',
                'Formatting': 'التنسيق',
                'Numbering and Bullets': 'الترقيم والتعداد النقطي',
                'Numbering': 'ترقيم',
                'Update Field': 'تحديث الحقل',
                'Edit Field': 'تحرير الحقل',
                'Bookmark': 'الإشارة المرجعية',
                'Page Setup': 'اعداد الصفحة',
                'No bookmarks found': 'لم يتم العثور علي إشارات مرجعيه',
                'Number format tooltip information': 'تنسيق رقم أحادي المستوي:' + '</br>' + '[بادئه]% [مستوي الاعداد] [لاحقه]' + '</br>'
                    + 'علي سبيل االمثال ، "الفصل% 1." سيتم عرض الترقيم مثل' + '</br>' + 'الفصل الأول- البند' + '</br>' + 'الفصل الثاني- البند' + '</br>...'
                    + '</br>' + 'الفصل نون-البند' + '</br>'
                    + '</br>' + 'تنسيق رقم متعدد الإعدادات:' + '</br>' + '[بادئه]% [مستوي المستوي]' + '</br>' + '[لاحقه] + [بادئه]%' + '</br>' + '[المستوي] [لاحقه]'
                    + '</br>' + 'علي سبيل المثال ، "% 1.% 2." سيتم عرض الترقيم مثل' + '</br>' + '1.1 البند' + '</br>' + '1.2 البند' + '</br>...' + '</br>' + '1. نون-البند',
                'Format': 'تنسيق',
                'Create New Style': 'إنشاء نمط جديد',
                'Modify Style': 'تعديل النمط',
                'New': 'الجديد',
                'Bullets': 'الرصاص',
                'Use bookmarks': 'استخدام الإشارات المرجعية',
                'Table of Contents': 'جدول المحتويات',
                'AutoFit': 'الاحتواء',
                'AutoFit to Contents': 'احتواء تلقائي للمحتويات',
                'AutoFit to Window': 'احتواء تلقائي للإطار',
                'Fixed Column Width': 'عرض العمود الثابت',
                'Reset': 'اعاده تعيين',
                'Match case': 'حاله المباراة',
                'Whole words': 'كلمات كامل',
                'Add': 'اضافه',
                'Go To': 'الانتقال إلى',
                'Search for': 'البحث عن',
                'Replace with': 'استبدال',
                'TOC 1': 'جدول المحتويات 1',
                'TOC 2': 'جدول المحتويات 2',
                'TOC 3': 'جدول المحتويات 3',
                'TOC 4': 'جدول المحتويات 4',
                'TOC 5': 'جدول المحتويات 5',
                'TOC 6': 'جدول المحتويات 6',
                'TOC 7': 'جدول المحتويات 7',
                'TOC 8': 'جدول المحتويات 8',
                'TOC 9': 'جدول المحتويات 9',
                'Right-to-left': 'من اليمين إلى اليسار',
                'Left-to-right': 'من اليسار إلى اليمين',
                'Direction': 'الاتجاه',
                'Table direction': 'اتجاه الجدول',
                'Indent from right': 'مسافة بادئه من اليمين'
            },
            'colorpicker': {
                'Apply': 'تطبيق',
                'Cancel': 'إلغاء الأمر',
                'ModeSwitcher': 'مفتاح كهربائي الوضع'
            }
        }
    });
    var documenteditor = new index_1.DocumentEditor({
        isReadOnly: false
    });
    documenteditor.enableAllModules();
    var controller = 'api/documenteditor/';
    var baseUrl = 'https://ej2services.syncfusion.com/production/web-services/' + controller;
    var zoomFactor = new ej2_inputs_1.Slider({
        change: changeZoomValue,
        value: 100,
        min: 10,
        max: 500
    });
    zoomFactor.appendTo('#zoom_factor');
    var buttonClicked = false;
    var zoom_factor = document.getElementById('zoom_factor_change');
    function changeZoomValue(arg) {
        if (!buttonClicked) {
            documenteditor.zoomFactor = arg.value / 100;
            zoom_factor.innerHTML = arg.value + '%';
        }
        buttonClicked = false;
    }
    var decreaseButton = document.getElementById('decrease');
    decreaseButton.addEventListener('click', zoomDecrease);
    var increaseButton = document.getElementById('increase');
    increaseButton.addEventListener('click', zoomIncrease);
    var zoom_factor_value = document.getElementById('zoom_factor');
    function zoomDecrease(arg) {
        var zoomValue = zoom_factor_value.ej2_instances[0].value;
        if (zoomValue % 10 !== 0) {
            var value = Math.round(zoomValue / 10) * 10;
            if (value > zoomValue) {
                value -= 10;
            }
        }
        else {
            value = zoomValue;
            value -= 10;
        }
        documenteditor.zoomFactor = value / 100;
        zoom_factor.innerHTML = value + '%';
        buttonClicked = true;
    }
    function zoomIncrease(arg) {
        var zoomValue = zoom_factor_value.ej2_instances[0].value;
        if (zoomValue % 10 !== 0) {
            var value = Math.round(zoomValue / 10) * 10;
            if (value < zoomValue) {
                value += 10;
            }
        }
        else {
            value = zoomValue;
            value += 10;
        }
        documenteditor.zoomFactor = value / 100;
        zoom_factor.innerHTML = value + '%';
        buttonClicked = true;
    }
    var toolBar = new ej2_navigations_1.Toolbar({
        clicked: toolbar_btn_click_handler,
        items: [
            {
                prefixIcon: 'e-de-tab-blank-document', tooltipText: 'New', id: 'new'
            },
            {
                prefixIcon: 'e-de-icon-upload tb-icons', tooltipText: 'Open', id: 'open'
            },
            {
                prefixIcon: 'e-de-icon-export tb-icons', tooltipText: 'Save', id: 'save'
            },
            {
                prefixIcon: 'e-de-icon-print tb-icons', tooltipText: 'Print', id: 'print'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-de-tab-blank-document', tooltipText: 'InsertFootnote', id: 'InsertFootnote'
            },
            {
                prefixIcon: 'e-de-tab-blank-document', tooltipText: 'InsertEndnote', id: 'InsertEndnote'
            },
            {
                prefixIcon: 'e-de-icon-cut tb-icons', tooltipText: 'Cut', id: 'cut'
            },
            {
                prefixIcon: 'e-de-icon-copy tb-icons', tooltipText: 'Copy', id: 'copy'
            },
            {
                type: 'Separator'
            },
            {
                template: dropDownTemplate, tooltipText: 'Styles', id: 'styles', width: '200px'
            },
            {
                prefixIcon: 'e-de-icon-bold tb-icons', tooltipText: 'Bold', id: 'bold'
            },
            {
                prefixIcon: 'e-de-icon-italic tb-icons', tooltipText: 'Italic', id: 'italic'
            },
            {
                prefixIcon: 'e-de-icon-underline tb-icons', tooltipText: 'Underline', id: 'underline'
            },
            {
                prefixIcon: 'e-de-icon-strikethrough tb-icons', tooltipText: 'Strikethrough', id: 'strikethrough'
            },
            {
                prefixIcon: 'e-de-icon-subscript tb-icons', tooltipText: 'Subscript', id: 'subscript'
            },
            {
                prefixIcon: 'e-de-icon-superscript tb-icons', tooltipText: 'Superscript', id: 'superscript'
            },
            {
                prefixIcon: 'e-de-icon-fontcolor tb-icons', tooltipText: 'Font Color', id: 'fontcolor'
            },
            {
                prefixIcon: 'e-de-icon-clr-format tb-icons', tooltipText: 'Clear Formating', id: 'clear_format'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-de-icon-leftalign tb-icons', tooltipText: 'Align-Left', id: 'align-left'
            },
            {
                prefixIcon: 'e-de-icon-centeralign tb-icons', tooltipText: 'Align-Center', id: 'align-center'
            },
            {
                prefixIcon: 'e-de-icon-rightalign tb-icons', tooltipText: 'Align-Right', id: 'align-right'
            },
            {
                prefixIcon: 'e-de-icon-justifyalign tb-icons', tooltipText: 'Align-Justify', id: 'align-justify'
            },
            {
                prefixIcon: 'e-de-icon-increaseindent tb-icons', tooltipText: 'Text Indent', id: 'left-indent'
            },
            {
                prefixIcon: 'e-de-icon-decreaseindent tb-icons', tooltipText: 'Text Outdent', id: 'right-indent'
            },
            {
                type: 'Separator'
            },
            {
                template: bullet_list_element, tooltipText: 'Bullets', id: 'bullets_list'
            },
            {
                template: number_list_element, tooltipText: 'Numbering', id: 'numbering_list'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-de-icon-undo tb-icons', tooltipText: 'Undo', id: 'undo'
            },
            {
                prefixIcon: 'e-de-icon-redo tb-icons', tooltipText: 'Redo', id: 'redo'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-de-icon-insertimage tb-icons', tooltipText: 'Insert Image', id: 'insert_image'
            },
            {
                prefixIcon: 'e-de-icon-insertlink tb-icons', tooltipText: 'Insert Hyperlink', id: 'insert_hyperlink'
            },
            {
                prefixIcon: 'e-de-tab-bookmark', tooltipText: 'Insert Bookmark', id: 'bookmark'
            },
            {
                prefixIcon: 'e-de-icon-inserttable tb-icons', tooltipText: 'Insert Table', id: 'insert_table'
            },
            {
                template: insert_table_element, tooltipText: 'Insert above, below, left and right', id: 'insert-table-ppty'
            },
            {
                template: delete_table_element, tooltipText: 'Delete rows, columns or entire table', id: 'delete-table-ppty'
            },
            {
                type: 'Separator'
            },
            {
                prefixIcon: 'e-de-icon-find tb-icons', tooltipText: 'Find', id: 'find'
            }
        ]
    });
    toolBar.appendTo('#toolbar');
    var insert_table = document.getElementById('insert_table_ppty');
    insert_table.innerHTML = '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="insert-row-above" type="button" style="width:auto;opacity:0.87;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-row-above tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text" >Insert row above</div></button></div>';
    insert_table.innerHTML += '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="insert-row-below" type="button" style="width:auto;opacity:0.87;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-row-below tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text">Insert row below</div></button></div>';
    insert_table.innerHTML += '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="insert-column-left" type="button" style="width:auto;opacity:0.87;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-column-left tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text">Insert columns to the left</div></button></div>';
    insert_table.innerHTML += '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="insert-column-right" type="button" style="width:auto;opacity:0.87;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-column-right tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text">Insert columns to the right</div></button></div>';
    document.getElementById('insert-row-above').onclick = function () {
        documenteditor.editor.insertRow(true);
        insert_table.style.display = 'none';
    };
    document.getElementById('insert-row-below').onclick = function () {
        documenteditor.editor.insertRow(false);
        insert_table.style.display = 'none';
    };
    document.getElementById('insert-column-left').onclick = function () {
        documenteditor.editor.insertColumn(true);
        insert_table.style.display = 'none';
    };
    document.getElementById('insert-column-right').onclick = function () {
        documenteditor.editor.insertColumn(false);
        insert_table.style.display = 'none';
    };
    var delete_table = document.getElementById('delete_table_ppty');
    delete_table.innerHTML = '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="delete-table" type="button" style="width:auto;opacity:0.87;min-width:100%;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-delete tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text">Delete table</div></button></div>';
    delete_table.innerHTML += '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="delete-row" type="button" style="width:auto;opacity:0.87;min-width:100%;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-row-delete tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text" >Delete row</div></button></div>';
    delete_table.innerHTML += '<div class="e-toolbar-item e-toolbar-popup" style="min-width:120px;"><button class="e-tbar-btn e-tbtn-txt e-control e-btn" id="delete-column" type="button" style="width:auto;opacity:0.87;min-width:100%;min-width:100%;padding: 0 4px;font-weight:400;font-size:14px;"><span class="e-btn-icon e-de-icon-table-column-delete tb-icons e-icons e-icon-left" style="position:absolute;left:16px;"></span><div class="e-tbar-btn-text">Delete column</div></button></div>';
    document.getElementById('delete-table').onclick = function () {
        documenteditor.editor.deleteTable();
        delete_table.style.display = 'none';
    };
    document.getElementById('delete-row').onclick = function () {
        documenteditor.editor.deleteRow();
        delete_table.style.display = 'none';
    };
    document.getElementById('delete-column').onclick = function () {
        documenteditor.editor.deleteColumn();
        delete_table.style.display = 'none';
    };
    toolBar.enableItems(document.getElementById('insert_table_cells').parentElement, false);
    toolBar.enableItems(document.getElementById('delete_table_cells').parentElement, false);
    var bulletList = document.getElementById('bullet_list_ppty');
    var table1 = ej2_base_1.createElement('table');
    var bulletrow1 = ej2_base_1.createElement('tr');
    table1.appendChild(bulletrow1);
    var bulletcolumn1 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow1.appendChild(bulletcolumn1);
    var bullet_none = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-none' });
    bulletcolumn1.appendChild(bullet_none);
    var bulletcolumn2 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow1.appendChild(bulletcolumn2);
    var bullet_dot = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-dot' });
    bulletcolumn2.appendChild(bullet_dot);
    bulletrow1.appendChild(bulletcolumn2);
    var bulletcolumn3 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow1.appendChild(bulletcolumn3);
    var bullet_circle = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-circle' });
    bulletcolumn3.appendChild(bullet_circle);
    var bulletcolumn4 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow1.appendChild(bulletcolumn4);
    var bullet_square = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-square' });
    bulletcolumn4.appendChild(bullet_square);
    var bulletrow2 = ej2_base_1.createElement('tr');
    table1.appendChild(bulletrow2);
    var bulletcolumn21 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow2.appendChild(bulletcolumn21);
    var bullet_flower = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-flower' });
    bulletcolumn21.appendChild(bullet_flower);
    var bulletcolumn22 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow2.appendChild(bulletcolumn22);
    var bullet_arrow = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-arrow' });
    bulletcolumn22.appendChild(bullet_arrow);
    var bulletcolumn23 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-bullet' });
    bulletrow2.appendChild(bulletcolumn23);
    var bullet_tick = ej2_base_1.createElement('div', { className: 'e-de-list-bullet-tick' });
    bulletcolumn23.appendChild(bullet_tick);
    bulletList.appendChild(table1);
    var listDialog1 = ej2_base_1.createElement('div', { className: 'e-de-list-dialog-open', innerHTML: 'Define new Multilevel List...', styles: 'text-align:center;padding:7px;' });
    bulletList.appendChild(listDialog1);
    listDialog1.addEventListener('click', openListDilaog);
    bullet_none.addEventListener('click', bulletNoneClick);
    bullet_dot.addEventListener('click', bulletDotClick);
    bullet_circle.addEventListener('click', bulletCircleClick);
    bullet_square.addEventListener('click', bulletSquareClick);
    bullet_flower.addEventListener('click', bulletFlowerClick);
    bullet_arrow.addEventListener('click', bulletArrowClick);
    bullet_tick.addEventListener('click', bulletTickClick);
    function bulletNoneClick() {
        if (documenteditor.editorModule) {
            documenteditor.selection.paragraphFormat.setList(undefined);
        }
    }
    function bulletDotClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet('\uf0b7', 'Symbol');
        }
    }
    function bulletCircleClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet("\uf06f" + "\u0020", 'Symbol');
        }
    }
    function bulletSquareClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet('\uf0a7', 'Wingdings');
        }
    }
    function bulletFlowerClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet('\uf076', 'Wingdings');
        }
    }
    function bulletArrowClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet('\uf0d8', 'Wingdings');
        }
    }
    function bulletTickClick() {
        if (documenteditor.editorModule) {
            documenteditor.editor.applyBullet('\uf0fc', 'Wingdings');
        }
    }
    var numberedList = document.getElementById('numbered_list_ppty');
    var table2 = ej2_base_1.createElement('table');
    var numberedrow1 = ej2_base_1.createElement('tr');
    table2.appendChild(numberedrow1);
    var numberedcolumn1 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow1.appendChild(numberedcolumn1);
    var numbered_none = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-none' });
    numberedcolumn1.appendChild(numbered_none);
    var numberedcolumn2 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow1.appendChild(numberedcolumn2);
    var numbered_numberdot = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-number-dot' });
    numberedcolumn2.appendChild(numbered_numberdot);
    numberedrow1.appendChild(numberedcolumn2);
    var numberedcolumn3 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow1.appendChild(numberedcolumn3);
    var numbered_numberbrace = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-number-brace' });
    numberedcolumn3.appendChild(numbered_numberbrace);
    var numberedrow2 = ej2_base_1.createElement('tr');
    table2.appendChild(numberedrow2);
    var numberedcolumn21 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow2.appendChild(numberedcolumn21);
    var numbered_uproman = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-up-roman' });
    numberedcolumn21.appendChild(numbered_uproman);
    var numberedcolumn22 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow2.appendChild(numberedcolumn22);
    var numbered_uplettter = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-up-letter' });
    numberedcolumn22.appendChild(numbered_uplettter);
    var numberedcolumn23 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow2.appendChild(numberedcolumn23);
    var numbered_lowletterbrace = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-low-letter-brace' });
    numberedcolumn23.appendChild(numbered_lowletterbrace);
    var numberedrow3 = ej2_base_1.createElement('tr');
    table2.appendChild(numberedrow3);
    var numberedcolumn31 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow3.appendChild(numberedcolumn31);
    var numbered_lowletterdot = ej2_base_1.createElement('div', { className: 'e-de-numbered-low-letter-dot' });
    numberedcolumn31.appendChild(numbered_lowletterdot);
    var numberedcolumn32 = ej2_base_1.createElement('td', { styles: 'padding:4px;', className: 'e-de-numbered' });
    numberedrow3.appendChild(numberedcolumn32);
    var numbered_lowroman = ej2_base_1.createElement('div', { className: 'e-de-list-numbered-low-roman' });
    numberedcolumn32.appendChild(numbered_lowroman);
    numberedList.appendChild(table2);
    var listDialog = ej2_base_1.createElement('div', { className: 'e-de-list-dialog-open', innerHTML: 'Define new Multilevel List...', styles: 'text-align:center;padding:7px;' });
    numberedList.appendChild(listDialog);
    listDialog.addEventListener('click', openListDilaog);
    numbered_none.addEventListener('click', numberedNoneClick);
    numbered_numberdot.addEventListener('click', numberedNumberDotClick);
    numbered_numberbrace.addEventListener('click', numberedNumberBraceClick);
    numbered_uproman.addEventListener('click', numberedUpRomanClick);
    numbered_uplettter.addEventListener('click', numberedUpLetterClick);
    numbered_lowletterbrace.addEventListener('click', numberedLowLetterBraceClick);
    numbered_lowletterdot.addEventListener('click', numberedLowLetterDotClick);
    numbered_lowroman.addEventListener('click', numberedLowRomanClick);
    function numberedNoneClick() {
        documenteditor.selection.paragraphFormat.setList(undefined);
    }
    function numberedNumberDotClick() {
        documenteditor.editor.applyNumbering('%1.', 'Arabic');
    }
    function numberedNumberBraceClick() {
        documenteditor.editor.applyNumbering('%1)', 'Arabic');
    }
    function numberedUpRomanClick() {
        documenteditor.editor.applyNumbering('%1.', 'UpRoman');
    }
    function numberedUpLetterClick() {
        documenteditor.editor.applyNumbering('%1.', 'UpLetter');
    }
    function numberedLowLetterBraceClick() {
        documenteditor.editor.applyNumbering('%1)', 'LowLetter');
    }
    function numberedLowLetterDotClick() {
        documenteditor.editor.applyNumbering('%1.', 'LowLetter');
    }
    function numberedLowRomanClick() {
        documenteditor.editor.applyNumbering('%1.', 'LowRoman');
    }
    function openListDilaog() {
        documenteditor.listDialogModule.showListDialog();
    }
    function toolbar_btn_click_handler(arg) {
        var value;
        switch (arg.item.id) {
            case 'align-justify':
                if (documenteditor.editorModule) {
                    documenteditor.editorModule.toggleTextAlignment('Justify');
                }
                break;
            case 'align-center':
                if (documenteditor.editorModule) {
                    documenteditor.editorModule.toggleTextAlignment('Center');
                }
                break;
            case 'align-right':
                if (documenteditor.editorModule) {
                    documenteditor.editorModule.toggleTextAlignment('Right');
                }
                break;
            case 'align-left':
                if (documenteditor.editorModule) {
                    documenteditor.editorModule.toggleTextAlignment('Left');
                }
                break;
            case 'italic':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleItalic();
                }
                break;
            case 'underline':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleUnderline('Single');
                }
                break;
            case 'bold':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleBold();
                }
                break;
            case 'copy':
                if (documenteditor.editorModule) {
                    documenteditor.selection.copy();
                }
                break;
            case 'cut':
                if (documenteditor.editorModule) {
                    documenteditor.editor.cut();
                }
                break;
            case 'new':
                documenteditor.openBlank();
                break;
            case 'open':
                var fileUpload = document.getElementById('uploadfileButton');
                fileUpload.value = '';
                fileUpload.click();
                break;
            case 'save':
                saveDocx();
                break;
            case 'bullets_list':
                bulletList.style.left = arg.originalEvent.clientX - arg.originalEvent.offsetX + 'px';
                bulletList.style.display = 'block';
                break;
            case 'numbering_list':
                numberedList.style.left = arg.originalEvent.clientX - arg.originalEvent.offsetX + 'px';
                numberedList.style.display = 'block';
                break;
            case 'left-indent':
                if (documenteditor.editorModule) {
                    documenteditor.selection.increaseIndent();
                }
                break;
            case 'right-indent':
                if (documenteditor.editorModule) {
                    documenteditor.selection.decreaseIndent();
                }
                break;
            case 'print':
                documenteditor.print();
                break;
            case 'strikethrough':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleStrikethrough('SingleStrike');
                }
                break;
            case 'subscript':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleSubscript();
                }
                break;
            case 'superscript':
                if (documenteditor.editorModule) {
                    documenteditor.selection.toggleSuperscript();
                }
                break;
            case 'clear_format':
                documenteditor.editorModule.clearFormatting();
                break;
            case 'undo':
                if (documenteditor.editorHistory) {
                    documenteditor.editorHistory.undo();
                }
                break;
            case 'redo':
                if (documenteditor.editorHistory) {
                    documenteditor.editorHistory.redo();
                }
                break;
            case 'insert_image':
                var pictureUpload = document.getElementById("insertImageButton");
                pictureUpload.value = '';
                pictureUpload.click();
                break;
            case 'insert_hyperlink':
                documenteditor.showHyperlinkDialog();
                break;
            case 'insert_table':
                documenteditor.showTableDialog();
                break;
            case 'insert-table-ppty':
                insert_table.style.left = arg.originalEvent.clientX - arg.originalEvent.offsetX + 'px';
                insert_table.style.display = 'block';
                break;
            case 'delete-table-ppty':
                delete_table.style.left = arg.originalEvent.clientX - arg.originalEvent.offsetX + 'px';
                delete_table.style.display = 'block';
                break;
            case 'find':
                documenteditor.showOptionsPane();
                break;
            case 'fontcolor':
                document.getElementById('font_color_input').click();
                if (ej2_base_1.Browser.isWindows || ej2_base_1.Browser.isIE) {
                    document.getElementById('font_color_input').style.left = "";
                }
                break;
            case 'bookmark':
                documenteditor.showBookmarkDialog();
                break;
            case 'pdf':
                savePdf();
                break;
        }
    }
    var host = 'http://internaldemo.syncfusion.com:598/';
    function saveDocx() {
        documenteditor.save('Sample', 'Docx');
    }
    ;
    function saveText() {
        documenteditor.save('Sample', 'Txt');
    }
    ;
    function saveJSON() {
        documenteditor.save('Sample', 'Sfdt');
    }
    ;
    function savePdf() {
        saveFile('Pdf', '.pdf');
    }
    ;
    function saveRtf() {
        saveFile('Rtf', '.rtf');
    }
    ;
    function saveDoc() {
        saveFile('Doc', '.doc');
    }
    ;
    function saveDot() {
        saveFile('Dot', '.dot');
    }
    ;
    function saveDotx() {
        saveFile('Dotx', '.dotx');
    }
    ;
    function saveWordML() {
        saveFile('WordML', '.xml');
    }
    ;
    function saveFile(api, format) {
        documenteditor.saveAsBlob().then(function (blobData) {
            var formData = new FormData();
            formData.append('fname', 'sample.docx');
            formData.append('data', blobData);
            saveAs(formData, 'Save' + api, format);
        });
    }
    function saveAs(formData, method, format) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', baseUrl + method, true);
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200 || httpRequest.status === 304) {
                    if (navigator !== undefined && !(!navigator.msSaveBlob)) {
                        navigator.msSaveBlob(httpRequest.response, 'sample' + format);
                    }
                    else {
                        var downloadLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                        saveInternal('sample' + format, format, httpRequest.response, downloadLink, 'download' in downloadLink);
                    }
                }
                else {
                    console.error(httpRequest.response);
                }
            }
        };
        httpRequest.responseType = 'blob';
        httpRequest.send(formData);
    }
    ;
    function saveInternal(fileName, extension, buffer, downloadLink, hasDownloadAttribute) {
        if (hasDownloadAttribute) {
            downloadLink.download = fileName;
            var dataUrl_1 = window.URL.createObjectURL(buffer);
            downloadLink.href = dataUrl_1;
            var event_1 = document.createEvent('MouseEvent');
            event_1.initEvent('click', true, true);
            downloadLink.dispatchEvent(event_1);
            setTimeout(function () {
                window.URL.revokeObjectURL(dataUrl_1);
                dataUrl_1 = undefined;
            });
        }
        else {
            if (extension !== 'docx' && extension !== 'xlsx') {
                var url = window.URL.createObjectURL(buffer);
                var isPopupBlocked = window.open(url, '_blank');
                if (!isPopupBlocked) {
                    window.location.href = url;
                }
            }
            else {
                var reader_1 = new FileReader();
                reader_1.onloadend = function () {
                    var isPopupBlocked = window.open(reader_1.result, '_blank');
                    if (!isPopupBlocked) {
                        window.location.href = reader_1.result;
                    }
                };
                reader_1.readAsDataURL(buffer);
            }
        }
    }
    ;
    function loadFile(path) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', baseUrl + 'Import', true);
        var waitingPopUp = document.getElementById('waiting-popup');
        waitingPopUp.style.display = 'block';
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200 || httpRequest.status === 304) {
                    documenteditor.open(httpRequest.responseText);
                    waitingPopUp.style.display = 'none';
                }
                else {
                    waitingPopUp.style.display = 'none';
                    console.error(httpRequest.response);
                }
            }
        };
        var formData = new FormData();
        formData.append('files', path);
        document.getElementById('titlebar').innerHTML = path.name;
        httpRequest.send(formData);
    }
    ;
    documenteditor.zoomFactorChange = function () {
        document.getElementById('zoom_factor_change').innerHTML = Math.round(documenteditor.viewer.zoomFactor * 100) + '%';
        zoomFactor.value = Math.round(documenteditor.viewer.zoomFactor * 100);
    };
    documenteditor.contentChange = function () {
        setTimeout(function () {
            onContentChange();
        }, 20);
    };
    documenteditor.selectionChange = function () {
        setTimeout(function () {
            onSelectionChange();
        }, 20);
    };
    document.getElementById('uploadfileButton').addEventListener('change', onFileChange);
    document.getElementById('uploadfileButton').setAttribute('accept', '.doc,.docx,.rtf,.txt,.htm,.html,.sfdt');
    document.getElementById('insertImageButton').addEventListener('change', onInsertImage);
    document.getElementById('font_color_input').addEventListener('change', onFontColor);
    function onFontColor(arg) {
        if (documenteditor.editorModule) {
            documenteditor.selection.characterFormat.fontColor = arg.target.value;
        }
    }
    function onInsertImage(args) {
        if ((navigator !== undefined) && (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET'))) {
            if (args.target.files[0]) {
                var path = args.target.files[0];
                var reader = new FileReader();
                reader.onload = function (frEvent) {
                    var base64String = frEvent.target.result;
                    var image = document.createElement('img');
                    image.addEventListener('load', function () {
                        documenteditor.editor.insertImage(base64String, this.width, this.height);
                    });
                    image.src = base64String;
                };
                reader.readAsDataURL(path);
            }
        }
        else {
            var image = document.createElement('img');
            image.addEventListener('load', function () {
                documenteditor.editor.insertImage(args.target.value);
            });
            image.src = args.target.value;
        }
    }
    function onFileChange(args) {
        if (args.target.files[0]) {
            var path = args.target.files[0];
            if (path.name.substr(path.name.lastIndexOf('.')) === '.sfdt') {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    var contents = e.target.result;
                    documenteditor.open(contents);
                };
                fileReader.readAsText(path);
                documenteditor.documentName = path.name.substr(0, path.name.lastIndexOf('.'));
            }
            else {
                loadFile(path);
            }
        }
        event.preventDefault();
    }
    ;
    var cut = document.getElementById('cut');
    var copy = document.getElementById('copy');
    var boldButton = document.getElementById('bold');
    var italicButton = document.getElementById('italic');
    var underlineButton = document.getElementById('underline');
    var strikethrough = document.getElementById('strikethrough');
    var subScript = document.getElementById('subscript');
    var superScript = document.getElementById('superscript');
    var leftAlignButton = document.getElementById('align-left');
    var rightAlignButton = document.getElementById('align-right');
    var centerAlignButton = document.getElementById('align-center');
    var justifyButton = document.getElementById('align-justify');
    var undo = document.getElementById('undo');
    var redo = document.getElementById('redo');
    var hyperLink = document.getElementById('insert_hyperlink');
    var insertTable = document.getElementById('insert_table');
    function onSelectionChange() {
        if (documenteditor.selection.characterFormat.bold) {
            if (!boldButton.classList.contains('e-btn-toggle')) {
                boldButton.classList.add('e-btn-toggle');
            }
        }
        else {
            if (boldButton.classList.contains('e-btn-toggle')) {
                boldButton.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.characterFormat.italic) {
            if (!italicButton.classList.contains('e-btn-toggle')) {
                italicButton.classList.add('e-btn-toggle');
            }
        }
        else {
            if (italicButton.classList.contains('e-btn-toggle')) {
                italicButton.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.characterFormat.underline !== undefined && documenteditor.selection.characterFormat.underline !== 'None') {
            if (!underlineButton.classList.contains('e-btn-toggle')) {
                underlineButton.classList.add('e-btn-toggle');
            }
        }
        else {
            if (underlineButton.classList.contains('e-btn-toggle')) {
                underlineButton.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.characterFormat.strikethrough !== undefined && documenteditor.selection.characterFormat.strikethrough !== 'None') {
            if (!strikethrough.classList.contains('e-btn-toggle')) {
                strikethrough.classList.add('e-btn-toggle');
            }
        }
        else {
            if (strikethrough.classList.contains('e-btn-toggle')) {
                strikethrough.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.characterFormat.baselineAlignment !== undefined && documenteditor.selection.characterFormat.baselineAlignment === 'Subscript') {
            if (!subScript.classList.contains('e-btn-toggle')) {
                subScript.classList.add('e-btn-toggle');
            }
        }
        else {
            if (subScript.classList.contains('e-btn-toggle')) {
                subScript.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.characterFormat.baselineAlignment !== undefined && documenteditor.selection.characterFormat.baselineAlignment === 'Superscript') {
            if (!superScript.classList.contains('e-btn-toggle')) {
                superScript.classList.add('e-btn-toggle');
            }
        }
        else {
            if (superScript.classList.contains('e-btn-toggle')) {
                superScript.classList.remove('e-btn-toggle');
            }
        }
        if (documenteditor.selection.paragraphFormat.textAlignment === 'Left') {
            if (!leftAlignButton.classList.contains('e-btn-toggle')) {
                leftAlignButton.classList.add('e-btn-toggle');
            }
            if (rightAlignButton.classList.contains('e-btn-toggle')) {
                rightAlignButton.classList.remove('e-btn-toggle');
            }
            if (centerAlignButton.classList.contains('e-btn-toggle')) {
                centerAlignButton.classList.remove('e-btn-toggle');
            }
            if (justifyButton.classList.contains('e-btn-toggle')) {
                justifyButton.classList.remove('e-btn-toggle');
            }
        }
        else if (documenteditor.selection.paragraphFormat.textAlignment === 'Right') {
            if (leftAlignButton.classList.contains('e-btn-toggle')) {
                leftAlignButton.classList.remove('e-btn-toggle');
            }
            if (!rightAlignButton.classList.contains('e-btn-toggle')) {
                rightAlignButton.classList.add('e-btn-toggle');
            }
            if (centerAlignButton.classList.contains('e-btn-toggle')) {
                centerAlignButton.classList.remove('e-btn-toggle');
            }
            if (justifyButton.classList.contains('e-btn-toggle')) {
                justifyButton.classList.remove('e-btn-toggle');
            }
        }
        else if (documenteditor.selection.paragraphFormat.textAlignment === 'Center') {
            if (leftAlignButton.classList.contains('e-btn-toggle')) {
                leftAlignButton.classList.remove('e-btn-toggle');
            }
            if (rightAlignButton.classList.contains('e-btn-toggle')) {
                rightAlignButton.classList.remove('e-btn-toggle');
            }
            if (!centerAlignButton.classList.contains('e-btn-toggle')) {
                centerAlignButton.classList.add('e-btn-toggle');
            }
            if (justifyButton.classList.contains('e-btn-toggle')) {
                justifyButton.classList.remove('e-btn-toggle');
            }
        }
        else if (documenteditor.selection.paragraphFormat.textAlignment === 'Justify') {
            if (leftAlignButton.classList.contains('e-btn-toggle')) {
                leftAlignButton.classList.remove('e-btn-toggle');
            }
            if (rightAlignButton.classList.contains('e-btn-toggle')) {
                rightAlignButton.classList.remove('e-btn-toggle');
            }
            if (centerAlignButton.classList.contains('e-btn-toggle')) {
                centerAlignButton.classList.remove('e-btn-toggle');
            }
            if (!justifyButton.classList.contains('e-btn-toggle')) {
                justifyButton.classList.add('e-btn-toggle');
            }
        }
        else if (documenteditor.selection.paragraphFormat.textAlignment === 'Justify') {
            if (leftAlignButton.classList.contains('e-btn-toggle')) {
                leftAlignButton.classList.remove('e-btn-toggle');
            }
            if (rightAlignButton.classList.contains('e-btn-toggle')) {
                rightAlignButton.classList.remove('e-btn-toggle');
            }
            if (centerAlignButton.classList.contains('e-btn-toggle')) {
                centerAlignButton.classList.remove('e-btn-toggle');
            }
            if (!justifyButton.classList.contains('e-btn-toggle')) {
                justifyButton.classList.add('e-btn-toggle');
            }
        }
        if (documenteditor.selection.isEmpty) {
            toolBar.enableItems(cut.parentElement, false);
            toolBar.enableItems(copy.parentElement, false);
        }
        else {
            toolBar.enableItems(cut.parentElement, true);
            toolBar.enableItems(copy.parentElement, true);
        }
        if (documenteditor.editorHistory && !documenteditor.editorHistory.canUndo()) {
            toolBar.enableItems(undo.parentElement, false);
        }
        if (documenteditor.editorHistory && !documenteditor.editorHistory.canRedo()) {
            toolBar.enableItems(redo.parentElement, false);
        }
    }
    var wordCount = document.getElementById('word_count');
    function onContentChange() {
        if (documenteditor.editorHistory && !documenteditor.editorHistory.canUndo()) {
            toolBar.enableItems(undo.parentElement, false);
        }
        else {
            toolBar.enableItems(undo.parentElement, true);
        }
        if (documenteditor.editorHistory && !documenteditor.editorHistory.canRedo()) {
            toolBar.enableItems(redo.parentElement, false);
        }
        else {
            toolBar.enableItems(redo.parentElement, true);
        }
    }
    documenteditor.requestNavigate = function (args) {
        if (args.linkType !== 'Bookmark') {
            var link = args.navigationLink;
            if (args.localReference.length > 0) {
                link += '#' + args.localReference;
            }
            window.open(link);
            args.isHandled = true;
        }
    };
    window.addEventListener('mouseup', isEnableResizer);
    function isEnableResizer(event) {
        if ((event.offsetX <= 0 && !ej2_base_1.isNullOrUndefined(documenteditor.imageResizerModule) && documenteditor.imageResizerModule.isImageResizing)
            || (event.clientY <= 94 && !ej2_base_1.isNullOrUndefined(documenteditor.imageResizerModule) && documenteditor.imageResizerModule.isImageResizing)) {
            documenteditor.imageResizerModule.mouseUpInternal();
            documenteditor.imageResizerModule.isImageResizing = false;
        }
    }
    documenteditor.appendTo('#container');
    var listObj = new ej2_dropdowns_1.DropDownList({
        index: 0,
        placeholder: 'Select a style',
        dataSource: [{ StyleName: 'Normal', Class: 'e-style-edit e-de-icon-clr-format' }],
        fields: { iconCss: 'Class', value: 'StyleName' },
        footerTemplate: '<span class="e-de-ctnr-dropdown-ftr"> Create a Style</span>',
        width: 150,
        select: function (args) {
            if (!documenteditor.isReadOnly && documenteditor.editorModule && args.isInteracted) {
                if (!ej2_base_1.isNullOrUndefined(args.e) && args.e.target.className === 'e-list-icon e-style-edit e-de-icon-clr-format') {
                    if (documenteditor.styleDialogModule && !ej2_base_1.isNullOrUndefined(documenteditor.documentHelper.styles.findByName(args.itemData.StyleName))) {
                        documenteditor.styleDialogModule.show(args.itemData.StyleName);
                    }
                }
                else {
                    documenteditor.editorModule.applyStyle(args.itemData.StyleName);
                }
            }
        },
        open: function (args) {
            updateStyleNames();
            args.popup.element.getElementsByClassName('e-de-ctnr-dropdown-ftr')[0].addEventListener('click', createStyle);
        }
    });
    listObj.appendTo('#style');
    function updateStyleNames() {
        var collection = documenteditor.documentHelper.styles.getStyleNames('Paragraph');
        var defaultStyleNames = ['Normal', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'];
        var finalList = collection.concat(defaultStyleNames).filter(function (v, i, a) { return a.indexOf(v) === i; });
        listObj.dataSource = constructStyleDropItems(finalList);
    }
    function constructStyleDropItems(stlyeNames) {
        var collection = [];
        for (var _i = 0, stlyeNames_1 = stlyeNames; _i < stlyeNames_1.length; _i++) {
            var name_1 = stlyeNames_1[_i];
            var obj = {};
            obj.StyleName = name_1;
            obj.Class = 'e-style-edit e-de-icon-clr-format';
            collection.push(obj);
        }
        return collection;
    }
    function createStyle() {
        if (documenteditor.styleDialogModule) {
            documenteditor.styleDialogModule.show();
        }
    }
});
