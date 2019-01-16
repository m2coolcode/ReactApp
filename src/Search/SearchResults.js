import React from "react";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ReactJson from "react-json-view";

const logData = [
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj ycmukfy,kutjkdt,jgf,jt,jgc,jkgjhgjhggfgvfghyuuuuuuuuuuuuuuuuuuuuuuuuuuuudckxxxtmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmgdxvcxvsfsfsvcx vchcgjg nbghgcnbvngjhgttttgfghfhgfhjvjhfjhvmbsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null4 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null4 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null3 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null4 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null3 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null3 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null3 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api1/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null2 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null4 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null2 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO1","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null2 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO1","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},
    {"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null2 pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"},{"id":"0422","time":"2013-11-19 02:34:58","level":"INFO","method":"POST","uri":"/api/v1/textdata","logText":"Null pointer exception, Stacktrace Adjdvjkj bsdgvgjk,dfgjhdfj,kjjksdjh"}];
const logColumn =[
    {
        name: "Time",
        options: {
            filter: false,
            sort: false,
            download: false
        }
    },
    {
        name: "Log Level",
        options: {
            filter: true,
            filterType : 'textField',
            //filterList: ['Franky Miles'],
            //filterOptions: ['a', 'b', 'c', 'Business Analyst'],
            sort: true,
            download: false,
            resizableColumns: true
        }
    },
    {
        name: "URI",
        options: {
            filter: true,
            sort: false,
            download: false,
            resizableColumns: true
        }
    },
    {
        name: "Method",
        options: {
            filter: true,
            sort: false,
            download: false,
            resizableColumns: true
        },
    },
    {
        name: "Raw Text",
        options: {
            filter: false,
            display: false,
            filterType : 'textField',
            sort: false,
            download: false
        }
    },
    {
        name: "Log Text",
        options: {
            filter: false,
            filterType : 'textField',
            sort: false,
            download: false,
            resizableColumns: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                return(
                  <ReactJson src={value} collapsed={true} enableClipboard={false}/>
                );
            }
        }
    }
];

function getParsedLog(rawData){
    const data = [];
    rawData.forEach(function(logRow){
        const log = [];
        log.push(logRow['time']);
        log.push(logRow['level']);
        log.push(logRow['uri']);
        log.push(logRow['method']);
        log.push(JSON.stringify(logRow));
        log.push(logRow);
        data.push(log);
    });

    return data;
}


class SearchResults extends React.Component {
    render() {
        const options = {
            //filterType: "dropdown",
            filterType : 'multiselect',
            responsive: "scroll",
            sort: true,
            filter: true,
            print: false,
            download: false,
            viewColumns: true,
            selectableRows: false,
            pagination: true,
            resizableColumns: false,
            expandableRows: true,
            renderExpandableRow: function (rowData, rowMeta) {
                return (
                    <React.Fragement>
                        <p>fdgvdfdfvdfvdjvgadvhlsakdvhkasdvhlkasdvnlksdav</p>
                        <p>vdffvdvdfvdf</p>
                    </React.Fragement>

                );
            },
            caseSensitive: false,
            //onSearchChange: () => {}
            //onSearchOpen: () => {}

        };

        return (
            <MUIDataTable
                title={"Query results"}
                data={getParsedLog(logData)}
                columns={logColumn}
                options={options}
            />
        );
    }
}
SearchResults.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default SearchResults;
