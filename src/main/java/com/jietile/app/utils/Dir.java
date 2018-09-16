package com.jietile.app.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Dir {
    private String dirPath;

    public Dir(String dirPath) {
        this.dirPath = dirPath;
    }

    public String getDirPath() {
        return dirPath;
    }

    public void setDirPath(String dirPath) {
        this.dirPath = dirPath;
    }

    public List<FileInfo> getDirFilesInfo() {
        File dir = new File(this.dirPath);
        File[] files = dir.listFiles();
        List<FileInfo> fileInfos = new ArrayList<FileInfo>();
        if (files != null && files.length > 0) {
            for (int i = 0; i < files.length; i++) {
                FileInfo fileInfo = new FileInfo(files[i].getName(), files[i].length());
                fileInfos.add(fileInfo);
            }
            return fileInfos;
        }
        return null;
    }
}
