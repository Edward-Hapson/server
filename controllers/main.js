const express = require('express')

const displayData = (req,res) => {
   res.json('hello, i am edward')
}

module.exports = {
    displayData
}