package com.jietile.app.control;


import java.io.File;
import java.io.IOException;
import java.util.List;

import com.jietile.app.utils.Dir;
import com.jietile.app.utils.FileInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller("upload-async-controller")
@RequestMapping(value = "/upload/")
public class UploadFileController {

    @RequestMapping(value = "/async", method = RequestMethod.GET)
    public String index() {
        return "async";
    }

    @RequestMapping(value = "/async/save", method = RequestMethod.POST)
    public @ResponseBody
    String save(@RequestParam(value = "files", required = true) List<MultipartFile> files) {
        // Save the files
        for (MultipartFile file : files) {
            String filePath = file.getOriginalFilename();
            File desFile = new File(filePath);
            if (!desFile.getParentFile().exists()) {
                desFile.mkdirs();
            }
            try {
                file.transferTo(desFile);
            } catch (IllegalStateException | IOException e) {
                e.printStackTrace();
                return null;
            }

        }
        // Return an empty string to signify success
        return "";
    }

    @RequestMapping(value = "/async/remove", method = RequestMethod.POST)
    public @ResponseBody
    String remove(@RequestParam String[] fileNames) {
        // Remove the files
        for (String fileName : fileNames) {
            File file = new File(fileName);
            if (file.exists()) file.delete();
        }
        // Return an empty string to signify success
        return "";
    }

    @RequestMapping(value = "/async/info", method = RequestMethod.GET)
    @ResponseBody
    public List<FileInfo> info(@RequestParam String dirPath) {
        Dir dir = new Dir(dirPath);
        return dir.getDirFilesInfo();
    }
}