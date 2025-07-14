<template>
  <div class="container mt-5 mb-5">
    <div class="row row-eq-height">
      <div class="col-md-12 mb-5">
        <h1>Vue.js Functional Calendar</h1>
      </div>
      <div class="col-md-4">
        <h4>Sample Calendar</h4>
        <h5>...</h5>
        <functional-calendar class="calendar"></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :configs='{}'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Dark theme</h4>
        <h5>...</h5>
        <functional-calendar
          :change-month-function="true"
          :change-year-function="true"
          :is-date-range="true"
          :is-dark="true"
          class="calendar"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-dark='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Change Month, Change Year</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          v-model="calendar"
          :change-month-function="true"
          :change-year-function="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :change-month-function='true' :change-year-function='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>With Week Numbers</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :showWeekNumbers="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :showWeekNumbers='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Date Picker</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          v-model="calendar"
          :is-date-picker="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-date-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>With Time Picker</h4>
        <h5>...</h5>
        <functional-calendar
          class="demo-calendar"
          :is-date-picker="true"
          :with-time-picker="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :with-time-picker='true' :is-date-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Multiple Date Picker</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          v-model="calendar"
          :is-multiple-date-picker="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-multiple-date-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Multiple Date Picker With Time</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          v-model="calendarWithTimePicker"
          :is-multiple-date-picker="true"
          :with-time-picker="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-multiple-date-picker='true' :with-time-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Date Range</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :is-date-range="true"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-date-range='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Marked Dates</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :marked-dates="markedDates"
          :marked-date-range="markedDateRange"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :marked-dates='markedDates' :marked-date-range='markedDateRange'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Minimum and Maximum selected days</h4>
        <functional-calendar
          class="calendar"
          :is-date-range="true"
          :min-sel-days="3"
          :max-sel-days="6"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar  :is-date-range='true'  :min-sel-days='3'
          :max-sel-days='6'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Disabled Day Names</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :is-date-picker="true"
          :disabledDayNames="['Su', 'We']"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar  :is-date-picker='true'  :disabled-day-names='['Su', 'We']'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Limits</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :is-date-picker="true"
          :change-month-function="true"
          :change-year-function="true"
          :limits="{
            min: '8/' + getCurrentMonth() + '/' + getCurrentYear(),
            max: '24/' + getCurrentMonth() + '/' + getCurrentYear(),
          }"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar  :limits='{min: '8/06/2020', max: '24/06/2020'}' :is-date-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Left And Right Days Disabled</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :is-date-picker="true"
          :hidden-elements="['leftAndRightDays']"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :hidden-elements='['leftAndRightDays']'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Slots Exampale</h4>
        <h5>...</h5>
        <functional-calendar
          class="calendar"
          :is-date-picker="true"
          #default="props"
        >
          <div class="text-center">
            {{ props.day.day }}
            <span
              :class="{
                'green-point': props.day.day === 5,
                'orange-point': props.day.day === 9,
                'green-line': props.day.day === 11,
              }"
            ></span>
          </div>
        </functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :hidden-elements='['leftAndRightDays']'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-8">
        <h4>Separately Calendars</h4>
        <functional-calendar
          class="calendar"
          :is-date-range="true"
          :is-multiple="true"
          :calendars-count="2"
          :is-separately="true"
          :hidden-elements="['leftAndRightDays']"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-separately='true' :is-date-range='true':is-multiple='true' :calendars-count='2'></functional-calendar>"
        ></highlight-code>
      </div>

      <div class="col-md-4">
        <h4>Modal</h4>
        <functional-calendar
          class="demo-calendar modal-calendar"
          :is-modal="true"
          :is-date-picker="true"
        ></functional-calendar>
        <br />
        <br />
        <highlight-code
          lang="html"
          code="<functional-calendar  :is-modal='true' :is-date-picker='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-4">
        <h4>Modal | Date Range</h4>
        <functional-calendar
          class="calendar modal-calendar"
          :is-date-range="true"
          :is-modal="true"
        ></functional-calendar>
        <br />
        <br />
        <highlight-code
          lang="html"
          code="<functional-calendar  :is-modal='true' :is-date-range='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-8">
        <h4>Mutliple Calendars | With Modal</h4>
        <functional-calendar
          class="calendar modal-calendar-multiple"
          :is-modal="true"
          :is-date-range="true"
          :is-multiple="true"
          :calendars-count="2"
        ></functional-calendar>
        <br />
        <div>
          <highlight-code
            lang="html"
            code="<functional-calendar  :is-modal='true' :is-date-range='true' :is-multiple='true' :calendars-count='2'></functional-calendar>"
          ></highlight-code>
        </div>
      </div>

      <div class="col-md-12">
        <h4>Mutliple Calendars</h4>
        <functional-calendar
          class="calendar multiple"
          :is-date-range="true"
          :is-multiple="true"
          :calendars-count="2"
        ></functional-calendar>
        <highlight-code
          lang="html"
          code="<functional-calendar :is-multiple='true' :calendars-count='2' :is-date-range='true'></functional-calendar>"
        ></highlight-code>
      </div>
      <div class="col-md-12">
        <h4>API</h4>
        <div class="mb-5">
          <button class="btn btn-sm btn-primary m-1" @click="preMonth">
            Pre Month
          </button>
          <button class="btn btn-sm btn-primary m-1" @click="nextMonth">
            Next Month
          </button>
          <button class="btn btn-sm btn-primary m-1" @click="preYear">
            Pre Year
          </button>
          <button class="btn btn-sm btn-primary m-1" @click="nextYear">
            Next Year
          </button>
          <button
            class="btn btn-sm btn-primary m-1"
            @click="chooseDate('31/06/2020')"
          >
            Change Date (31/06/2020)
          </button>
        </div>
        <div class="col-md-6">
          <functional-calendar
            class="calendar multiple"
            ref="Calendar"
            :is-date-picker="true"
          ></functional-calendar>
        </div>
      </div>
      <div class="col-md-12">
        <h4>Multiple Date Range Picker</h4>
        <div class="col-md-6">
          <functional-calendar
            :is-date-range="true"
            :can-clear-range="true"
            v-model="rangesData"
            :is-multiple-date-range="true"
          ></functional-calendar>
        </div>
      </div>
    </div>
    <div>
      <!--
      <github-button
        href="https://github.com/ManukMinasyan/vue-functional-calendar"
        data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star ManukMinasyan/vue-functional-calendar on GitHub"
        >Star</github-button
      >
      -->
    </div>
  </div>
</template>

<script>
import { FunctionalCalendar } from '../index'

export default {
  name: "App",
  data() {
    return {
      calendar: {},
      calendarWithTimePicker: {},
      data: {
        clieckedToday: false,
      },
      markedDateRange: {
        start: "2/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
        end: "7/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
      },
      markedDates: [
        "16/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
        "18/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
        "20/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
        "21/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
      ],
      rangesData: {
        multipleDateRange: [{
          start: "16/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
          end: "21/" + this.getCurrentMonth() + "/" + this.getCurrentYear(),
        }]
      },
    };
  },
  methods: {
    preMonth() {
      this.$refs.Calendar.PreMonth();
    },
    nextMonth() {
      this.$refs.Calendar.NextMonth();
    },
    preYear() {
      this.$refs.Calendar.PreYear();
    },
    nextYear() {
      this.$refs.Calendar.NextYear();
    },
    chooseDate(date) {
      this.$refs.Calendar.ChooseDate(date);
    },
    getCurrentMonth() {
      return new Date().getMonth() + 1;
    },
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
  components: {
    FunctionalCalendar,
  },
};
</script>

<style lang="scss">
@use "./assets/scss/style.scss";
.green-line {
  width: 15px;
  position: absolute;
  height: 2px;
  background-color: #45cc0d;
  bottom: 3px;
  left: calc(50% - 7.5px);
}

.green-point {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #45cc0d;
  bottom: 3px;
  left: calc(50% - 4px);
}

.orange-point {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #EBAE05;
  bottom: 3px;
  left: calc(50% - 4px);
}

pre code.hljs {
  padding: 0.5em;
}
</style>
