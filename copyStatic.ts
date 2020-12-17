import * as shelljs from "shelljs";

shelljs.cp("-R", "views", "dist");
shelljs.cp("-R", "public", "dist");
