<%--
  Created by IntelliJ IDEA.
  User: dgp
  Date: 18-9-16
  Time: 下午10:39
  To change this template use File | Settings | File Templates.
--%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<div class="box">
    <h4>Information</h4>
    <p>
        The Upload is able to upload files out-of-band using the
        HTML5 File API with fallback for legacy browsers.
    </p>
    <p>
        You need to configure save action that will receive
        the uploaded files.
        An optional remove action is also available.
    </p>
</div>


<c:url value="/upload/async/save" var="saveUrl" />
<c:url value="/upload/async/remove" var="removeUrl" />

<div class="demo-section k-content">
    <kendo:upload name="files">
        <kendo:upload-async autoUpload="true" saveUrl="${saveUrl}" removeUrl="${removeUrl}"/>
    </kendo:upload>
</div>


