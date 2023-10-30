                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <div className="text-white font-semibold text-lg">
                      {project.ProjectName}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {project.description}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={project.UrlGit}
                    target="_blank"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    <i className="fab fa-git-alt text-2xl mr-2"></i> Ver
                    Repositorio
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <a
                    href={project.UrlWeb}
                    target="_blank"
                    className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-700 transition duration-300 ease-in-out"
                  >
                    <i className="fas fa-desktop text-2xl mr-2"></i> Ver Demo
                  </a>
                </div>
              </div>
            </div>