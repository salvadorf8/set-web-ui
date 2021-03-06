import React from 'react';
import { MDBModal } from 'mdbreact';
import InfiniteCalendar from 'react-infinite-calendar';
import { format } from 'date-fns';

class DatePickerModal extends React.Component {
    handleSelect = (date) => {
        var date = format(date, 'EEE, MMM do yyyy ');
        this.props.handleSelectedDate(date);
    };

    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

        return (
            <MDBModal isOpen={this.props.modal} toggle={this.props.handleToggle} size='sm'>
                <InfiniteCalendar
                    theme={{
                        selectionColor: 'rgb(146, 118, 255)',
                        textColor: {
                            default: '#333',
                            active: '#FFF'
                        },
                        weekdayColor: 'rgb(146, 118, 255)',
                        headerColor: 'black',
                        floatingNav: {
                            background: '#212529',
                            color: '#212529',
                            chevron: '#FFA726'
                        }
                    }}
                    width={400}
                    height={600}
                    selected={today}
                    minDate={lastWeek}
                    onSelect={this.handleSelect}
                />
            </MDBModal>
        );
    }
}

export default DatePickerModal;
