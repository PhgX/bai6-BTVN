import { CadresManagement } from "./cadresManagement";
import * as rl from "readline-sync";
import { Engineer } from "./engineer";
import { Employee } from "./employee";
import { Staff } from "./staff";

let cadresManagement: CadresManagement = new CadresManagement();
let choice = -1;

const EXIT = 0;
const SHOWALLCADRES = 1;
const ADDNEWCADRES = 2;
const UPDATECADRES = 3;
const DELETECADRES = 4;

// const SHOWCADRES = 1;
// const SHOWEMPLOYEE = 2;
// const SHOWENGINEER = 3;
// const SHOWSTAFF = 4;

// const INPUTSTAFF = 1;
// const INPUTENGINEER = 2;
// const INPUTEMPLOYEE = 3;

function menu() {
  console.log("---Menu chính chương trình---");
  console.log("1. Hiển thị danh sách cán bộ");
  console.log("2. Thêm cán bộ mới");
  console.log("3. Update thông tin cán bộ");
  console.log("4. Xóa cán bộ");
  console.log("0. Thoát");
  console.log("Mời bạn nhập lựa chọn")
}

function menuShowCadresInfor() {
  console.log("---Menu Cán bộ muốn hiển thị---");
  console.log("1. Hiển thị toàn bộ cán bộ ");
  console.log("2. Hiển thị toàn bộ kỹ sư");
  console.log("3. Hiển thị toàn bộ nhân viên");
  console.log("4. Hiển thị toàn bộ công nhân");
  console.log("5. Quay lại menu chính");
  console.log("Mời bạn nhập lựa chọn")
}

function menuAddCadres() {
  console.log("---Menu thêm cán bộ---");
  console.log("1. Nhập nhân viên");
  console.log("2. Nhập kỹ sư");
  console.log("3. Nhập công nhân");
  console.log("4. Quay lại menu chính");
  console.log("Mời bạn nhập lựa chọn")
}

function menuUpdateCadres() {
  console.log("---Menu Update---");
  console.log("1. Update nhân viên");
  console.log("2. Update kỹ sư");
  console.log("3. Update công nhân");
  console.log("4. Quay lại menu chính");
  console.log("Mời bạn nhập lựa chọn")
}

function ShowCadres() {
  do {
    let choice = +rl.question(menuShowCadresInfor());
    let cadresList = cadresManagement.getFullCadresInfo();

    switch (choice) {
      case 1: {
        console.log("---Danh sách cán bộ---");
        for (let cadres of cadresList) {
          console.log(
            `${cadres.name}\t ${cadres.address}\t ${cadres.dob}\t ${cadres.gender}`
          );
        }
        break;
      }

      case 2: {
        for (let cadres of cadresList) {
          if (cadres instanceof Employee) {
            console.log(
              `${cadres.name}\t ${cadres.address}\t ${cadres.dob}\t ${cadres.gender}\t ${cadres.level}`
            );
          }
        }
        break;
      }

      case 3: {
        for (let cadres of cadresList) {
          if (cadres instanceof Engineer) {
            console.log(
              `${cadres.name}\t ${cadres.address}\t ${cadres.dob}\t ${cadres.gender}\t ${cadres.specialize}`
            );
          }
        }
        break;
      }

      case 4: {
        for (let cadres of cadresList) {
          if (cadres instanceof Staff) {
            console.log(
              `${cadres.name}\t ${cadres.address}\t ${cadres.dob}\t ${cadres.gender}\t ${cadres.job}`
            );
          }
        }
        break;
      }
    }
  } while (choice != 5);
}

function addNewCadres() {
  do {
    let choice = +rl.question(menuAddCadres());
    switch (choice) {
      case 1: {
        console.log("---Nhập thêm nhân viên mới---");
        let name = rl.question("Nhập tên");
        let dob = rl.question("Nhập ngày sinh");
        let address = rl.question("Nhập địa chỉ");
        let gender = rl.question("Nhập giới tính");
        let job = rl.question("Nhập công việc");
        let newStaff = new Staff(name, dob, address, gender, job);
        cadresManagement.addNewCadres(newStaff);
        break;
      }
      case 2: {
        console.log("---Nhập thêm kỹ sư mới---");
        let name = rl.question("Nhập tên");
        let dob = rl.question("Nhập ngày sinh");
        let address = rl.question("Nhập địa chỉ");
        let gender = rl.question("Nhập giới tính");
        let specialize = rl.question("Nhập chuyên môn");
        let newEngineer = new Engineer(name, dob, address, gender, specialize);
        cadresManagement.addNewCadres(newEngineer);
        break;
      }
      case 3: {
        console.log("---Nhập thêm công nhân mới---");
        let name = rl.question("Nhập tên");
        let dob = rl.question("Nhập ngày sinh");
        let address = rl.question("Nhập địa chỉ");
        let gender = rl.question("Nhập giới tính");
        let level = rl.question("Nhập công việc");
        let newEmployee = new Employee(name, dob, address, gender, level);
        cadresManagement.addNewCadres(newEmployee);
        break;
      }
      case 4: {
        break;
      }
    }
  } while (choice != 4);
}

function updateCadresInformation() {
  do {
    let choice = +rl.question(menuUpdateCadres());
    switch (choice) {
      case 1: {
        console.log("---Update nhân viên---");
        let name = rl.question("Nhập tên");
        let checkName = cadresManagement.findCadresByName(name);
        let checkTypeCadres = cadresManagement.isCadresAnStaff(name);
        if (checkName !== -1 && checkTypeCadres) {
          let dob = rl.question("Nhập ngày sinh");
          let address = rl.question("Nhập địa chỉ");
          let gender = rl.question("Nhập giới tính");
          let job = rl.question("Nhập công việc");
          let newStaff = new Staff(name, dob, address, gender, job);
          cadresManagement.updateCadresByName(name, newStaff);
          console.log("Update thành công");
        } else {
          console.log("***--Không tìm thấy nhân viên--***");
        }

        break;
      }
      case 2: {
        console.log("---Update kỹ sư ---");
        let name = rl.question("Nhập tên");
        let checkName = cadresManagement.findCadresByName(name);
        let checkTypeCadres = cadresManagement.isCadresAnEngineer(name);
        if (checkName !== -1 && checkTypeCadres) {
          let dob = rl.question("Nhập ngày sinh");
          let address = rl.question("Nhập địa chỉ");
          let gender = rl.question("Nhập giới tính");
          let specialize = rl.question("Nhập chuyên môn");
          let newEngineer = new Engineer(
            name,
            dob,
            address,
            gender,
            specialize
          );
          cadresManagement.addNewCadres(newEngineer);
          console.log("Update thành công");
        } else {
          console.log("***--Không tìm thấy kỹ sư--***");
        }

        break;
      }
      case 3: {
        console.log("---Update công nhân---");
        let name = rl.question("Nhập tên");
        let checkName = cadresManagement.findCadresByName(name);
        let checkTypeCadres = cadresManagement.isCadresAnEngineer(name);
        if (checkName !== -1 && checkTypeCadres) {
          let dob = rl.question("Nhập ngày sinh");
          let address = rl.question("Nhập địa chỉ");
          let gender = rl.question("Nhập giới tính");
          let level = rl.question("Nhập công việc");
          let newEmployee = new Employee(name, dob, address, gender, level);
          cadresManagement.addNewCadres(newEmployee);
          console.log("Update thành công");
        } else {
          console.log("***---Không tìm thấy công nhân--***");
        }
        break;
      }
      case 4: {
        break;
      }
    }
  } while (choice != 4);
}

function deleteCadres() {
  let name = rl.question("nhập tên cán bộ muốn xóa");
  let checkName = cadresManagement.findCadresByName(name);
  if(checkName != -1){
    cadresManagement.deleteCadresByName(name);
    console.log("Xóa thành công")
  } else {
    console.log("Cán bộ không có trong danh sách hoặc nhập sai tên");    
  }  
}

do {
  // menu();
  let choice = +rl.question(menu());
  switch (choice) {
    case SHOWALLCADRES: {
      ShowCadres();
      break;
    }

    case ADDNEWCADRES: {
      addNewCadres();
      break;
    }

    case UPDATECADRES: {
      updateCadresInformation();
      break;
    }

    case DELETECADRES: {
      deleteCadres();
      break;
    }

  }
} while (choice == EXIT);
