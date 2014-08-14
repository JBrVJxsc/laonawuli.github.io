function Words() {
    this.package = "package me.xuzh.resume";

    this.main = "public class Resume\n" +
        "{\n" +
        "    public static void main(String[] args)\n" +
        "    {\n\n" +
		         String firstName = \"Xu\";\n" +
				 String lastName = \"Zhang\";\n" +
				 String gender = \"Male\";\n" +
				 int age = 27;\n" +
				 String email = \"laonawuli@126.com\";\n" +
				 String linkedin = \"http://cn.linkedin.com/in/laonawuli\";\n" +
				 String gitHub = \"https://github.com/laonawuli\";\n" +
        "    }";

    this.basic = "    private class Basic\n" +
        "    {\n" +
        "        private String firstName = \"Xu\";\n" +
        "        private String lastName = \"Zhang\";\n" +
        "        private String gender = \"Male\";\n" +
        "        private int age = 27;\n" +
        "        private String phone = \"+8615750481555\";\n" +
        "        private String email = \"laonawuli@gmail.com\";\n" +
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