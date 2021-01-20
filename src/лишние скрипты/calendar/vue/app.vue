<template lang="pug">
  section.calendar-page.py-5.bg-light.d-none.d-md-block
    .container
      .row.mb-4
        .col-6.d-flex.align-items-center
          button.btn.calendar-page__btn-create + Создать событие
          .calendar-page__choise-date
            .calendar-page__choise-date-item
              bitton.btn.calendar-page__btn-gray 
                i.fas.fa-chevron-left
            .calendar-page__choise-date-item
              bitton.btn.calendar-page__btn-gray Сегодня
            .calendar-page__choise-date-item
              bitton.btn.calendar-page__btn-gray
                i.fas.fa-chevron-right
            .calendar-page__choise-date-item
              span май 2020 год
        .col-6.d-flex.justify-content-end
          button.btn.calendar-page__btn-icon
            i.fas.fa-search
          button.btn.calendar-page__btn-icon
            i.far.fa-question-circle
          button.btn.calendar-page__btn-icon
            i.fas.fa-cog
          .dropdown.calendar-page__view
            a.btn.dropdown-toggle.calendar-page__view-current(href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") Неделя
            div.dropdown-menu(aria-labelledby="dropdownMenuLink")
              a.dropdown-item.calendar-page__view-item(href="#") День
              a.dropdown-item.calendar-page__view-item(href="#") Неделя
              a.dropdown-item.calendar-page__view-item(href="#") Месяц
              a.dropdown-item.calendar-page__view-item(href="#") Год
              a.dropdown-item.calendar-page__view-item(href="#") Расписание
      .calendar-page__row
        .calendar-page__col-left
          .lcalendar
            .lcalendar__months
              a.lcalendar__months-btn.lcalendar__btn_prev
                i.fas.fa-chevron-left
              ul.lcalendar__months-list
                each yersItem in ['Январь', 'Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
                  if yersItem == 'Февраль'
                    li.lcalendar__month.lcalendar__month_active
                      button.lcalendar__month-btn=yersItem
                  else 
                    li.lcalendar__month
                      button.lcalendar__month-btn=yersItem
              a.lcalendar__months-btn.lcalendar__months-btn_next
                i.fas.fa-chevron-right
            ul.lcalendar__days-week
              each daysItem in ['пн', 'вт','ср','чт','пт','сб','вс']
                li.lcalendar__day-week=daysItem
            - var n = 1;		
            ul.lcalendar__days
              while n < 43
                if n == 1
                  li.lcalendar__day.lcalendar__day_not_current-month
                      button.lcalendar__day-btn= n++
                if n == 2
                  li.lcalendar__day.lcalendar__day_not_current-month
                    button.lcalendar__day-btn= n++
                if n == 3
                  li.lcalendar__day.lcalendar__day_not_current-month
                      button.lcalendar__day-btn= n++
                if n == 4
                  li.lcalendar__day.lcalendar__day_not_current-month
                    button.lcalendar__day-btn= n++
                if n == '24'
                  li.lcalendar__day.lcalendar__day_current
                    button.lcalendar__day-btn= n++
                else 
                  li.lcalendar__day
                    button.lcalendar__day-btn= n++
          .calendar-page__calendars
            .calendar-page__calendars-list-title Календари
            .calendar-page__calendars-list-item
              label(class="checkbox" for="")
                input.checkbox__input(type="checkbox")
                .checkbox__title Праздники РФ
            .calendar-page__calendars-list-item
              label(class="checkbox" for="")
                input.checkbox__input(type="checkbox")
                .checkbox__title Видеоконференции
            .calendar-page__calendars-list-item
              label(class="checkbox" for="")
                input.checkbox__input(type="checkbox")
                .checkbox__title Переговорная
            .calendar-page__calendars-list-item
              label(class="checkbox" for="")
                input.checkbox__input(type="checkbox")
                .checkbox__title Малый зал
            button.calendar-page__calendars-btn-add.calendar-page__btn-gray + Добавить календарь
        .calendar-page__col-right
          .bcalendar
            .bcalendar__days
              each day in [['вс', '8'],['пн', '9'],['вт', '10'],['ср', '11'],['чт', '12'],['пт', '13'],['сб', '14'],]
                if day[1] == '9'
                  .bcalendar__day.bcalendar__day_active
                    .bcalendar__day-name= day[0]
                    .bcalendar__day-num
                      button.bcalendar__day-num-btn= day[1]
                else 
                  .bcalendar__day
                    .bcalendar__day-name= day[0]
                    .bcalendar__day-num
                      button.bcalendar__day-num-btn= day[1]
            .bcalendar__week-grid
              .bcalendar__week-grid-cols
                .bcalendar__week-grid-time
                  each time in ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
                    .bcalendar__week-grid-hour
                      .bcalendar__week-grid-hour-value= time
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  .bcalendar__week-grid-day-hour
                  .bcalendar__week-grid-day-hour
                    .bcalendar__event(style="background: #4162a9; width:100%; height:95%")
                      .bcalendar__event-title Встреча с главой тпп
                      .bcalendar__event-desk Встреча с главой тпп
                  -var d = 2
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
                .bcalendar__week-grid-day
                  -var d = 0
                  while d < 24
                    - d++
                    .bcalendar__week-grid-day-hour
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {};
  }
};
</script>
