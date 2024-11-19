import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Normal (Public) Routes Imports
import { Home } from "../pages/Main";
import { About } from "../pages/About";
import { BuyCar } from "../pages/BuyCar";
import { SellCar } from "../pages/SellCar";
import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { MyAds } from "../pages/MyAds";
import { OnlineBooking } from "../pages/OnlineBooking";
import ViewDetailedCar from "../pages/ViewDetailedCar";

// Admin Routes Imports
import { AdminLayout } from "../components/organism/admin/AdminLayout";
import { GetUsedCars } from "../pages/GetUsedCars";
import { GetBankCars } from "../pages/GetBankCars";
import { GetNewCars } from "../pages/GetNewCars";
import { AddNewCar } from "../pages/AddNewCar";
import { AddUsedOrBankCar } from "../pages/AddUsedOrBankCar";
import { AddNewBlog } from "../pages/AddNewBlog";
import { GetAllQueries } from "../pages/GetAllQueries";
import { CreateNewsLetter } from "../pages/CreateNewsLetter";
import { GetAllMessages } from "../pages/GetAllMessages";
import { AdminHome } from "../pages/AdminHome";
import { MessagesDetailView } from "../pages/ViewDetailedMessages";
import { ViewDetailedQuery } from "../pages/ViewDetailedQuery";

import { Layout } from "../components/organism/AllPagesLayout";
import { ModalProvider } from "../components/organism/AllPagesLayout/ModalContext";

import RouteProtectionValidator from "./RouteProtectionValidator";
import { jwtDecode } from "jwt-decode";
import { UserToken } from "../components/atoms/PageLinks/types";
import UserRouteProtectionValidator from "./UserRouteProtectionValidator";
import { SearchProvider } from "../components/atoms/SearchContext";
import { AllUsedCars } from "../pages/AllUsedCars";
import { AllBankCars } from "../pages/AllBankCars";
import { AllNewCars } from "../pages/AllNewCars";
import { AdUpdation } from "../pages/AdUpdation";
import DetailedBlog from "../pages/DetailedBlog";

export const AppRouter: React.FC = () => {
  const token = localStorage.getItem("token");
  let role = "user";

  if (token) {
    const decodedToken = jwtDecode<UserToken>(token);
    role = decodedToken.role;
  }

  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <SearchProvider>
                <Layout>
                  <Home />
                </Layout>{" "}
              </SearchProvider>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/buyCar"
            element={
              <Layout>
                <BuyCar />
              </Layout>
            }
          />

          <Route
            path="/sellCar"
            element={
              <UserRouteProtectionValidator
                element={
                  <Layout>
                    {" "}
                    <SellCar />{" "}
                  </Layout>
                }
              />
            }
          />

          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {role === "User" ? (
            <Route
              path="/adUpdation/:id"
              element={
                <Layout>
                  <AdUpdation />
                </Layout>
              }
            />
          ) : (
            role === "Admin" && (
              <Route
                path="/adUpdation/:id"
                element={
                  <AdminLayout>
                    <AdUpdation />
                  </AdminLayout>
                }
              />
            )
          )}

          <Route
            path="/onlineBooking"
            element={
              <UserRouteProtectionValidator
                element={
                  <Layout>
                    {" "}
                    <OnlineBooking />{" "}
                  </Layout>
                }
              />
            }
          />

          <Route
            path="/allUsedCars"
            element={
              <Layout>
                <AllUsedCars />
              </Layout>
            }
          />

          <Route
            path="/allBankCars"
            element={
              <Layout>
                <AllBankCars />
              </Layout>
            }
          />
          <Route
            path="/allNewCars"
            element={
              <Layout>
                <AllNewCars />
              </Layout>
            }
          />
          <Route
            path="/detailedBlog/:id"
            element={
              <Layout>
                <DetailedBlog />
              </Layout>
            }
          />

          {role !== "Admin" && (
            <Route
              path="/viewDetailedCar/:id"
              element={
                <Layout>
                  {" "}
                  <ViewDetailedCar />{" "}
                </Layout>
              }
            />
          )}

          {role === "User" ? (
            <Route
              path="/myAds"
              element={
                <Layout>
                  <MyAds />
                </Layout>
              }
            />
          ) : (
            role === "Admin" && (
              <Route
                path="/myAds"
                element={
                  <AdminLayout>
                    <MyAds />
                  </AdminLayout>
                }
              />
            )
          )}

          <Route
            path="/adminHome"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <AdminHome />
                  </AdminLayout>
                }
              />
            }
          />

          {role === "Admin" && (
            <Route
              path="/viewDetailedCar/:id"
              element={
                <AdminLayout>
                  <ViewDetailedCar />
                </AdminLayout>
              }
            />
          )}

          <Route
            path="/getUsedCars"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <GetUsedCars role="Admin" />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/getBankCars"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <GetBankCars />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/getNewCars"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <GetNewCars />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/addNewCar"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <AddNewCar />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/addUsedOrBankCar"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <AddUsedOrBankCar />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/addNewBlog"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <AddNewBlog />
                  </AdminLayout>
                }
              />
            }
          />
          {/* <Route path="/getApprovedBlogs" element={<RouteProtectionValidator element={<AdminLayout><GetApprovedBlogs /></AdminLayout>} />} /> */}
          <Route
            path="/getAllQueries"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <GetAllQueries />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/createNewsLetter"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <CreateNewsLetter />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/getAllMessages"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <GetAllMessages />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/detailedMessages/:id"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <MessagesDetailView />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path="/detailedQuery/:id"
            element={
              <RouteProtectionValidator
                element={
                  <AdminLayout>
                    <ViewDetailedQuery />
                  </AdminLayout>
                }
              />
            }
          />
        </Routes>
      </ModalProvider>
    </Router>
  );
};
