﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace timesheet.api.model
{

    public class EmployeeTaskView
    {
        public string Task { get; set; }
        public int SundayHours { get; set; }
        public int MondayHours { get; set; }
        public int TuesdayHours { get; set; }
        public int WenesdayHours { get; set; }
        public int ThursdayHours { get; set; }
        public int FridayHours { get; set; }
        public int SaturdayHours { get; set; }
    }
}