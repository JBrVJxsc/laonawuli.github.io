function Words() {
    this.package = "package me.xuzh.resume";

    this.main = "public class Resume\n" +
        "{\n" +
        "    public static void main(String[] args)\n" +
        "    {\n" +
		"        String firstName = \"Xu\";\n" +
		"		String lastName = \"ZHANG\";\n" +
		"		String gender = \"Male\";\n" +
		"		int age = 27;\n" +
		"		String email = \"laonawuli@126.com\";\n" +
		"		String linkedin = \"http://cn.linkedin.com/in/laonawuli\";\n" +
		"		String gitHub = \"https://github.com/laonawuli\";\n" +
        "    }";

    this.employment = "    private class Employment\n" +
        "    {\n" +
        "        private String position = \"\";\n" +
        "        private String company = \"\";\n" +
        "        private String dateFrom = \"\";\n" +
        "        private String dateTo = \"\";\n" +
        "        private String description = \"\";\n" +
        "    }";

    this.project = "    private class Project\n" +
        "    {\n" +
        "        private String name = \"\";\n" +
        "        private String url = \"\";\n" +
        "        private String demo = \"\";\n" +
        "    }";

    this.skill = "    private class Skill\n" +
        "    {\n" +
        "        private String name = \"\";\n" +
        "        private String level = \"\";\n" +
        "    }";
		
	this.education = "";
}