/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Jane", "Doe");
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWdCQSxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFpQixFQUFFLFFBQWdCO0lBQzdFLE9BQU8sVUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUY7SUFHRSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDO0FBWUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24geyAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgJHtmaXJzdE5hbWVbMF19LiAke2xhc3ROYW1lfWA7XG59O1xuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpIHtcbiAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICB9XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gIG5ldyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRDbGFzc0ludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKFwiSmFuZVwiLCBcIkRvZVwiKTtcbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gIGxvY2F0aW9uOiBcIkxvbmRvblwiLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=