import React, { Component } from 'react';

class DateOfBirth extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    checkComplete(selectedDay, selectedMonth, selectedYear) {
        if (selectedDay !== undefined && selectedMonth !== undefined && selectedYear !== undefined) {
            if (this.checkValidAge(selectedDay, selectedMonth, selectedYear)) {
                this.updateState({'date-of-birth': {
                    day: selectedDay,
                    month: selectedMonth,
                    year: selectedYear
                }});
                this.updateState({
                    'valid-age': true
                })
            } else {
                this.updateState({
                    'valid-age': false
                })
            }
            this.incrementPage();
        }
    }

    checkValidAge(selectedDay, selectedMonth, selectedYear) {
        let currentDate = new Date();
        if (currentDate.getFullYear() === parseInt(selectedYear)) {
            if ((currentDate.getMonth() + 1) === parseInt(selectedMonth) && parseInt(selectedDay) - currentDate.getDate() < 15) {
                return false;
            } else if ((currentDate.getMonth() + 1) < parseInt(selectedMonth)) {
                return false;
            }
        } else if (parseInt(selectedYear) + 50 === currentDate.getFullYear()) {
            if (parseInt(selectedMonth) < currentDate.getMonth() + 1) {
                return false;
            } else if (parseInt(selectedMonth) === currentDate.getMonth() + 1 && parseInt(selectedDay) < currentDate.getDate()) {
                return false;
            }
        }
        this.checkAgeGroup(selectedDay, selectedMonth, selectedYear);
        return true;
    }

    checkAgeGroup(selectedDay, selectedMonth, selectedYear) {
        let currentDate = new Date();

        if (currentDate.getFullYear() - parseInt(selectedYear) < 15) {
            this.updateState({'age-group': 'child'})
        } else if (currentDate.getFullYear() - parseInt(selectedYear) === 16) {
            if (parseInt(selectedMonth) > currentDate.getMonth() + 1) {
                this.updateState({'age-group': 'child'})
            } else if (parseInt(selectedMonth) === currentDate.getMonth() + 1 && parseInt(selectedDay) > currentDate.getDate()) {
                this.updateState({'age-group': 'child'})
            }
        } else if (currentDate.getFullYear() - parseInt(selectedYear) > 40) {
            if (parseInt(selectedMonth) < currentDate.getMonth() + 1) {
                this.updateState({'age-group': 'senior-adult'})
            } else if (parseInt(selectedMonth) === currentDate.getMonth() + 1 && parseInt(selectedDay) < currentDate.getDate()) {
                this.updateState({'age-group': 'senior-adult'})
            }
        } else {
            this.updateState({'age-group': 'adult'})
        }
    }

    render() {
        let days = []
        for (let i = 1; i < 32; i++) {
            days.push(<option key={i.toString()} value={i.toString()} >{i.toString()}</option>)
        }
        
        let months = [{str: "January", num: 1}, 
                    {str: "February", num: 2},
                    {str: "March", num: 3}, 
                    {str: "April", num: 4},
                    {str: "May", num: 5},
                    {str: "June", num: 6},
                    {str: "July", num: 7}, 
                    {str: "August", num: 8},
                    {str: "September", num: 9},
                    {str: "October", num: 10}, 
                    {str: "November", num: 11}, 
                    {str: "December", num: 12}]

        let dateObj = new Date();
        let years = [];
        for (let i = parseInt(dateObj.getFullYear() - 50); i <= parseInt(dateObj.getFullYear()); i++) {
            years.push(<option key={i.toString()} value={i.toString()} >{i.toString()}</option>)
        }

        let selectedDay, selectedMonth, selectedYear;

        return (
            <div className="dob">
                <select name="day" onChange={(e) => {
                    selectedDay = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
                }}>
                    <option value="" selected disabled>Day</option>
                    {days}
                </select>

                <select name="month" onChange={(e) => {
                    selectedMonth = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
                }}>
                    <option value="" selected disabled>Month</option>
                    {months.map((month) => <option key={month.str.toLowerCase()} value={parseInt(month.num)}>{month.str}</option>)}
                </select>

                <select name="year" onChange={(e) => {
                    selectedYear = e.target.value;
                    this.checkComplete(selectedDay, selectedMonth, selectedYear);
                }}>
                    <option value="" selected disabled>Year</option>
                    {years}
                </select>
            </div>
        )
    }
}

export default DateOfBirth;