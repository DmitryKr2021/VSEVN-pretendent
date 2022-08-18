 document.querySelector('.pencil-date').onclick = function () {
   document.querySelector('.datetable_wrapper').classList.toggle("datetable_active");
 };

 let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

 function Calendar2(id, year, month) {
   var Dlast = new Date(year, month + 1, 0).getDate(),
     D = new Date(year, month, Dlast),
     DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
     DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
     calendar = '<tr>',
     monthNum = month;
   //console.log(D.getMonth());
   month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

   if (DNfirst != 0) {
     for (let i = 1; i < DNfirst; i++) {
       calendar += '<td>';
     }
   } else {
     for (let i = 0; i < 6; i++) {
       calendar += '<td>';
     }
   }
   for (let i = 1; i <= Dlast; i++) {
     if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
       calendar += '<td class="havedate">' + i;
     } else {
       calendar += '<td class="havedate">' + i;
     }
     if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
       calendar += '<tr>';
     }
   }
   for (var i = DNlast; i < 7; i++) {
     calendar += '<td>&nbsp;';
   }
   document.querySelector('#' + id + ' tbody').innerHTML = calendar;
   document.querySelector('#' + id + ' thead tr:nth-child(2) td:nth-child(2)').innerHTML = '<div><select class="CalendarSelectt"><option value="0">Январь</option><option value="1">Февраль</option><option value="2">Март</option><option value="3">Апрель</option><option value="4" selected>Май</option><option value="5">Июнь</option><option value="6">Июль</option><option value="7">Август</option><option value="8">Сентябрь</option><option value="9">Октябрь</option><option value="10">Ноябрь</option><option value="11">Декабрь</option></select></div>';

   document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = '<div><select class="CalendarSelectt"><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2015">2015</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2020">2020</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option></select></div>';

   let SelYear = document.querySelectorAll('#' + id + ' tr:nth-child(1) option');
   let SelMon = document.querySelectorAll('#' + id + ' tr:nth-child(2) option');
   for (let u = 0; u < SelMon.length; u++) {
     if (SelMon[u].hasAttribute('selected')) {
       SelMon[u].removeAttribute('selected');
     }
     if (SelMon[u].value == D.getMonth()) {
       //console.log('DMONTH: '+D.getMonth())
       SelMon[u].setAttribute('selected', true);
     }
   }
   for (let u = 0; u < SelYear.length; u++) {
     if (SelYear[u].hasAttribute('selected')) {
       SelYear[u].removeAttribute('selected');
     }
     if (SelYear[u].value == D.getFullYear()) {
       //console.log('DMONTH: '+D.getMonth())
       SelYear[u].setAttribute('selected', true);
     }
   }
   document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
   document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
   if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
     // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, 
     //добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
     document.querySelector('#' + id + ' tbody').innerHTML += '<tr class="table_last_row"><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
   }

   let lastRows = document.querySelectorAll('.table_last_row');
   if (lastRows.length == 2) {
     for (let y = 0; y < lastRows.length; y++) {
       lastRows[y].remove();
     }
   }
 }

 Calendar2("calendar2", new Date().getFullYear(), 3);
 calendar2Start();

 function calendar2Start() {
   let u = 0;
   let calendar2tdList = document.querySelectorAll('#calendar2 .havedate');
   for (let u = 0; u < calendar2tdList.length; u++) {
     calendar2tdList[u].onclick = function () {
       let td2Text = this.innerText;
       if (td2Text >= 1 & td2Text <= 9) {
         td2Text = '0' + td2Text;
       }
       let month2List = months[document.querySelector("#calendar2 thead tr:nth-child(2) select").value];
       //console.log(month2List);
       if (month2List == 'Август' || month2List == 'Март') {
         month2List += 'а';
       } else {
         month2List = month2List.slice(0, -1);
         month2List += 'я';
       }
       let year2List = document.querySelector('#calendar2 thead tr:nth-child(1) select').value;
       document.querySelector('.span-date').innerText = td2Text + ' ' + month2List + ' ' + year2List;
       document.querySelector('#calendar2').parentElement.childNodes[1].value = td2Text + ' ' + month2List + ' ' + year2List;
       this.classList.add('active_date');

       for (let i = 0; i < calendar2tdList.length; i++) {
         calendar2tdList[i].classList.remove('active_date');
       }
       this.classList.add('active_date');
     };
   }
 }

 var cal2selYear = 0;
 let CalenSelcYear2 = document.querySelector('#calendar2 > thead > tr:nth-child(1) td:nth-child(2)');
 CalenSelcYear2.onclick = function () {
   cal2selYear += 1;
   if (cal2selYear % 2 == 0) {
     let cal2YearGet = parseFloat(document.querySelector("#calendar2 thead tr:nth-child(1) select").value);
     //console.log('DD: ' + cal2YearGet);
     Calendar2("calendar2", cal2YearGet, document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month);
     calendar2Start();
   }
 };

 var cal2selMonth = 0;
 let CalenSelcMonth2 = document.querySelector('#calendar2 > thead > tr:nth-child(2) td:nth-child(2)');
 CalenSelcMonth2.onclick = function () {
   cal2selMonth += 1;
   if (cal2selMonth % 2 == 0) {
     let cal2MonthGet = parseFloat(document.querySelector("#calendar2 thead tr:nth-child(2) select").value);
     //console.log('DD: ' + cal2MonthGet);
     Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, cal2MonthGet);
     calendar2Start();
   }
 };

 // переключатель минус месяц
 document.querySelector(' #calendar2 thead tr:nth-child(2) td:nth-child(1)').onclick = function () {
   Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
   calendar2Start();
 };
 // переключатель плюс месяц
 document.querySelector(' #calendar2 thead tr:nth-child(2) td:nth-child(3)').onclick = function () {
   Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
   calendar2Start();
 };


 // переключатель минус год
 document.querySelector(' #calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {

   Calendar2("calendar2", parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year) - 1, document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month);
   calendar2Start();

   //alert(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year);

   /*if (document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year == 2010) {
     alert('У вас нет в выбираемом периоде резюме соискателей');
   } else {
     Calendar2("calendar2", parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year) - 1, document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month);
     calendar2Start();
   }*/
 };
 // переключатель плюс год
 document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3) ').onclick = function () {
   if (document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year == 2023) {
     alert('Слишком поздний год');
   } else {
     Calendar2("calendar2", parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year) + 1, document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month);
     calendar2Start();
   }
 };

 document.querySelector('.datetable_wrapper > button').addEventListener('click', e => {
   document.querySelector('.datetable_wrapper').classList.remove('datetable_active');
 });